from fastapi import FastAPI
from pydantic import BaseModel
from sqlalchemy import create_engine, text
from passlib.context import CryptContext

app = FastAPI()
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
engine = create_engine("postgresql://postgres:1111@localhost/tolet")


class RegisterRequest(BaseModel):
    # TODO: Add username (str) and password (str)
    username: str
    password: str

# TODO: POST route at "/register" that:
# checks if username already exists in users table
# if exists return {"error": "Username already taken"}
# if not exists hash the password and insert into users table
# return {"message": "User registered successfully!"}


@app.post("/register")
def register(data: RegisterRequest):
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
