from sqlalchemy import create_engine, text

engine = create_engine("postgresql://postgres:1111@localhost/tolet")

# TODO: Connect and fetch only listings where rent < 8000
# Use parameterized query:
# text("SELECT * FROM listings WHERE rent < :max_rent")
# Print each row

with engine.connect() as conn:
    # TODO
    res = conn.execute(text("SELECT * FROM listings WHERE rent < :max_rent"), {
        "max_rent": 8000
    })
    for i in res:
        print(i)
