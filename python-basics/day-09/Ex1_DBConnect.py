from sqlalchemy import create_engine, text

# TODO: Create engine using this connection string:
# "postgresql://postgres:YOURPASSWORD@localhost/tolet"
engine = create_engine("postgresql://postgres:1111@localhost/tolet")

# TODO: Connect to engine and run this query:
# "SELECT * FROM listings"
# Print the results
with engine.connect() as conn:
    res = conn.execute(text("SELECT * FROM listings"))
    for i in res:
        print(i)
