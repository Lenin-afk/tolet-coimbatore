from passlib.context import CryptContext

# TODO: Create a CryptContext object with schemes=["bcrypt"]
pwd_context = CryptContext(schemes=["bcrypt"])

# TODO: Hash this password: "mypassword123"
hashed = pwd_context.hash("mypassword123")

# TODO: Print the hashed password
print(hashed)
# TODO: Verify "mypassword123" against the hash and print True/False
print(pwd_context.verify("mypassword123", hashed))
