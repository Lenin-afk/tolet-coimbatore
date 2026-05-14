from jose import jwt
from datetime import datetime, timedelta, timezone

SECRET_KEY = "tolet-secret-key"
ALGORITHM = "HS256"

# TODO: Create a function called create_token(username)
# that returns a JWT token with:
# - "sub" set to username
# - "exp" set to 30 minutes from now using timedelta


def create_token(username):
    payload = {
        "sub": username,
        "exp": datetime.now(timezone.utc) + timedelta(minutes=30)
    }
    token = jwt.encode(payload, SECRET_KEY, ALGORITHM)
    return token


# TODO: Call create_token with "lenin" and print the token
print(create_token("lenin"))
