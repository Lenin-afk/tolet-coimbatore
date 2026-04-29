class Listing:
    def __init__(self, title, rent, area, contact):
        self.title = title
        self.rent = rent
        self.area = area
        self.contact = contact

    def show(self):
        print("Title:", self.title)
        print("Rent:", self.rent)
        print("Area:", self.area)
        print("Contact:", self.contact)
        print("---")


class FurnishedListing(Listing):
    def __init__(self, title, rent, area, contact, furniture_list):
        super().__init__(title, rent, area, contact)
        self.furniture_list = furniture_list

    def show(self):
        super().show()
        print("Furniture:", self.furniture_list)
        print("---")


class PGListing(Listing):
    def __init__(self, title, rent, area, contact, meals):
        super().__init__(title, rent, area, contact)
        self.meals = meals

    def show(self):
        super().show()
        print("Meals Included:", self.meals)
        print("---")


room1 = [PGListing("1BHK", 7000, "RS Puram", "9876543210", True), FurnishedListing("1BHK", 7000, "RS Puram",
                                                                                   "9876543210", ["Table", "Chair", "Bed"])]
for i in room1:
    i.show()
