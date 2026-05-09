# listing.py

class Listing:
    def __init__(self, title, rent, area, contact):
        # TODO: Store all 4 attributes
        self.title = title
        self.rent = rent
        self.area = area
        self.contact = contact

    def show(self):
        # TODO: Print title, rent, area, contact
        print(
            f"Title :{self.title}, Rent :{self.rent}, Area :{self.area} , Contact :{self.contact}")

    def is_affordable(self):
        # TODO: Return "Affordable" if rent < 8000 else "Expensive"
        if self.rent < 8000:
            return "Affordable"
        else:
            return "Expensive"
