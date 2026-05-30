from fastapi import FastAPI, Header
from pydantic import BaseModel
from sqlalchemy import create_engine, text
from passlib.context import CryptContext
from jose import jwt, JWTError
from datetime import datetime, timedelta, timezone
from fastapi.middleware.cors import CORSMiddleware
import os
import cloudinary
import cloudinary.uploader
import os
from fastapi import FastAPI, Header, UploadFile, File
from dotenv import load_dotenv
load_dotenv()

cloudinary.config(
    cloud_name = os.getenv("CLOUDINARY_CLOUD_NAME"),
    api_key = os.getenv("CLOUDINARY_API_KEY"),
    api_secret = os.getenv("CLOUDINARY_API_SECRET")
)

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
DATABASE_URL = os.getenv("DATABASE_URL", "postgresql://postgres:1111@localhost/tolet")
engine = create_engine(DATABASE_URL)
SECRET_KEY = "tolet-secret-key"
ALGORITHM = "HS256"

# --- Models ---


class UserRequest(BaseModel):
    # TODO: Add username and password fields
    username: str
    password: str

class Listing(BaseModel):
    # TODO: Add title, rent, area, contact fields
    title: str
    rent: int
    area: str
    contact: str
    # TODO: Add photo_url as optional field with default None photo_url: str = None
    photo_url: str = None
    # TODO: Add lat and lng as optional float fields with default None
    lat: float = None
    lng: float = None

# --- Auth Helpers ---


def create_token(username):
    # TODO: Create JWT token with 30 min expiry
    payload = {
        "sub": username,
        "exp": datetime.now(timezone.utc) + timedelta(minutes=30)
    }
    token = jwt.encode(payload, SECRET_KEY, ALGORITHM)
    return token


def verify_token(token):
    # TODO: Decode token and return username, raise Exception if invalid
    try:
        payload = jwt.decode(token, SECRET_KEY, ALGORITHM)
        return payload["sub"]
    except JWTError:
        raise JWTError("Invalid token")

# --- Auth Routes ---
# TODO: POST /register - register new user
# TODO: POST /login - login and return token


@app.post("/register")
def register_user(data: UserRequest):
    with engine.connect() as conn:
        res = conn.execute(text("SELECT * FROM users WHERE username = :username"), {
            "username": data.username
        })
        if res.fetchone():
            return {"error": "Username already exists"}
        else:
            hashed_pass = pwd_context.hash(data.password)
            conn.execute(text("INSERT INTO users (username, password) VALUES(:username, :password)"), {
                "username": data.username,
                "password": hashed_pass
            })
            conn.commit()
            return {"message": "User registered successfully"}


@app.post("/login")
def login_user(data: UserRequest):
    with engine.connect() as conn:
        res = conn.execute(text("SELECT * FROM users WHERE username = :username"), {
            "username": data.username
        })
        user = res.fetchone()
        if not user:
            return {"error": "User not found"}
        else:
            if pwd_context.verify(data.password, user[2]):
                return {"token": create_token(data.username)}
            else:
                return {"error": "Invalid password"}


# --- Listing Routes ---
# TODO: GET /listings - fetch all listings from DB (public)
# TODO: POST /listings - add listing (protected, needs token)
# TODO: DELETE /listings/{id} - delete listing (protected, needs token)


@app.get("/listings")
def get_listing():
    with engine.connect() as conn:
        res = conn.execute(text("SELECT * from listings"))
        res_list = []
        for i in res:
            res_list.append(
                {
                    "id": i[0],
                    "title": i[1],
                    "rent": i[2],
                    "area": i[3],
                    "contact": i[4],
                    "photo_url": i[5],
                    "lat": i[6],
                    "lng": i[7]
                }
            )
        return res_list

# TODO: Update POST /listings route to also insert photo_url into database
# UPDATE the INSERT query to include photo_url column
@app.post("/listings")
def add_listing(listing: Listing, token: str = Header(...)):
    try:
        username = verify_token(token)
        with engine.connect() as conn:
            conn.execute(text("INSERT INTO listings (title, rent, area, contact, photo_url, lat, lng) VALUES (:title, :rent, :area , :contact, :photo_url, :lat, :lng)"),
                         {
                             "title": listing.title,
                             "rent": listing.rent,
                             "area": listing.area,
                             "contact": listing.contact,
                             "photo_url": listing.photo_url,
                             "lat": listing.lat,
                             "lng": listing.lng

            })
            conn.commit()
            return {"message": f"Listing added by {username}"}
    except JWTError:
        return {"error": "Invalid token"}


@app.delete("/listings/{id}")
def delete_listing(id: int, token: str = Header(...)):
    try:
        username = verify_token(token)
        with engine.connect() as conn:
            res = conn.execute(text("DELETE FROM listings WHERE id = :id"),
                               {
                "id": id
            })
            conn.commit()
            if res.rowcount == 1:
                return {"message": "Listing deleted"}
            else:
                return {"error": "Listing not found"}
    except JWTError:
        return {"error": "Invalid token"}


# TODO: Create a POST route at "/upload-photo" that:
# accepts a file using UploadFile
# uploads it to Cloudinary using cloudinary.uploader.upload()
# returns {"photo_url": result["secure_url"]}

@app.post("/upload-photo")
async def upload_photo(file: UploadFile = File(...)):
    contents= await file.read()
    result=cloudinary.uploader.upload(contents)
    return {"photo_url": result["secure_url"]}


# TODO: Add GET route at "/listings/{id}" that returns single listing by id
# If not found return {"error": "Listing not found"}

@app.get("/listings/{id}")
def get_listing(id: int):
        with engine.connect() as conn:
            res= conn.execute(text("SELECT * FROM listings WHERE id =:id"),{
                "id":id
            })
            row=res.fetchone()
            if row:
                return {
                    "id": row[0],
                    "title": row[1],
                    "rent": row[2],
                    "area": row[3],
                    "contact": row[4],
                    "photo_url": row[5],
                    "lat": row[6],
                    "lng": row[7]
                }
            else:
                return {"error": "Listing not found"}