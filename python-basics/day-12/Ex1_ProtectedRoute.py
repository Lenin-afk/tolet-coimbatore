from fastapi import FastAPI, Header
from jose import jwt, JWTError

app = FastAPI()
SECRET_KEY = "tolet-secret-key"
ALGORITHM = "HS256"

# TODO: Create a function called verify_token(token)
# that decodes the JWT token and returns the username
# if invalid raise an Exception with message "Invalid token"


def verify_token(token):
    try:
        payload = jwt.decode(token, SECRET_KEY, ALGORITHM)
        return payload["sub"]
    except JWTError:
        raise JWTError("Invalid token")
# TODO: Create a GET route at "/protected" that:
# takes token from Header using token: str = Header(...)
# calls verify_token(token)
# if valid returns {"message": "Welcome {username}!"}
# if invalid returns {"error": "Invalid token"}


@app.get("/protected")
def func(token: str = Header(...)):
    try:
        username = verify_token(token)
        return {"message": f"Welcome {username}!"}
    except JWTError:
        return {"error": "Invalid token"}
