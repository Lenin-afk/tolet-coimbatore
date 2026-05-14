from fastapi import FastAPI
from pydantic import BaseModel
from passlib.context import CryptContext
from jose import jwt
from datetime import datetime, timedelta, timezone

app = FastAPI()
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
SECRET_KEY = "tolet-secret-key"
ALGORITHM = "HS256"

# Fake users DB
users = {
    "lenin": "$2b$12$zynsarMh31/saAbvNZOs5ux3WbEmdqsGRMFSj85WKwkIOuwTscv4S"
    # hashed password from Ex1
}


class LoginRequest(BaseModel):
    # TODO: Add username (str) and password (str)
    username: str
    password: str


def create_token(username):
    # TODO: Copy from Ex2
    payload = {
        "sub": username,
        "exp": datetime.now(timezone.utc) + timedelta(minutes=30)
    }
    token = jwt.encode(payload, SECRET_KEY, ALGORITHM)
    return token


# TODO: POST route at "/login" that:
# checks if username exists in users dict
# verifies password using pwd_context.verify()
# if valid returns {"token": create_token(username)}
# if invalid returns {"error": "Invalid credentials"}
@app.post("/login")
def func(login_data: LoginRequest):
    if login_data.username in users:
        if pwd_context.verify(login_data.password, users[login_data.username]):
            return {"token": create_token(login_data.username)}
        else:
            return {"error": "Invalid credentials"}
    else:
        return {"error": "No User Exist"}
