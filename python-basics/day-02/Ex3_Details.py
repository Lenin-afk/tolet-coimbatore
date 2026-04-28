class Listing:
    def __init__(self, title, rent, area, furnished, contact):
        self.title = title
        self.rent = rent
        self.area = area
        self.furnished = furnished
        self.contact = contact

    def show(self):
        print("Title:", self.title)
        print("Rent:", self.rent)
        print("Area:", self.area)
        print("Furnished:", "Yes" if self.furnished else "No")
        print("Contact:", self.contact)
        print(self.is_affordable())
        print("---")

    def is_affordable(self):
        return "Affordable" if self.rent < 8000 else "Expensive"

    def summary(self):
        print(
            f"{self.title} | {self.area} | {self.rent} | {"Furnished" if self.furnished else "Not Furnished"}")


listings = [
    Listing("1BHK", 7000, "RS Puram", True, "9876543210"),
    Listing("2BHK", 12000, "Gandhipuram", False, "9123456780"),
    Listing("Single Room", 5500, "Saibaba Colony", True, "9988776655"),
]

for listing in listings:
    listing.summary()
