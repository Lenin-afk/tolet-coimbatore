from fastapi import FastAPI
from pydantic import BaseModel
from sqlalchemy import create_engine, text
from passlib.context import CryptContext
from jose import jwt
from datetime import datetime, timedelta, timezone

app = FastAPI()
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
engine = create_engine("postgresql://postgres:1111@localhost/tolet")
SECRET_KEY = "tolet-secret-key"
ALGORITHM = "HS256"


class UserRequest(BaseModel):
    # TODO: Add username (str) and password (str)
    username: str
    password: str


def create_token(username):
    # TODO: Copy from Day 11
    payload = {
        "sub": username,
        "exp": datetime.now(timezone.utc) + timedelta(minutes=30)
    }
    token = jwt.encode(payload, SECRET_KEY, ALGORITHM)
    return token

# TODO: POST route at "/register"
# - check if username exists
# - if exists return {"error": "Username already taken"}
# - if not hash password and insert into users table
# - return {"message": "Registered successfully!"}


@app.post("/register")
def register(data: UserRequest):
    with engine.connect() as conn:
        res = conn.execute(text("SELECT * FROM users WHERE username = :username"),
                           {
            "username": data.username
        })
        if res.fetchone():
            return {"error": "Username already taken"}
        else:
            hash_password = pwd_context.hash(data.password)
            conn.execute(text("INSERT INTO users (username,password) VALUES (:username, :password)"), {
                "username": data.username,
                "password": hash_password
            })
            conn.commit()
        return {"message": "User registered successfully!"}


# TODO: POST route at "/login"
# - fetch user from DB by username
# - if not found return {"error": "User not found"}
# - verify password
# - if valid return {"token": create_token(username)}
# - if invalid return {"error": "Invalid password"}

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
            return {"error": "Invalid password"}
