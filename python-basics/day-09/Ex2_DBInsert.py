from sqlalchemy import create_engine, text

engine = create_engine("postgresql://postgres:4455@localhost/tolet")

# TODO: Connect to engine and insert a new listing
# title: "3BHK", rent: 18000, area: "Peelamedu", contact: "9876501234"
# Use parameterized query like this:
# text("INSERT INTO listings (title, rent, area, contact) VALUES (:title, :rent, :area, :contact)")
# Don't forget to commit!

with engine.connect() as conn:
    # TODO: Execute insert query
    # TODO: Commit using conn.commit()
    conn.execute(text(
        "INSERT INTO listings (title, rent, area, contact) VALUES (:title, :rent, :area, :contact)"),
        {
        "title": "3BHK",
        "rent": 18000,
        "area": "Peelamedu",
        "contact": "9786645321"
    }
    )
    conn.commit()

print("Listing inserted!")
