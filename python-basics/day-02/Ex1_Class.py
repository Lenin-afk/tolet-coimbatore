class Listing:
    def __init__(self, title, rent, area):
        self.title = title
        self.rent = rent
        self.area = area

    def show(self):
        print("Title:", self.title)
        print("Rent:", self.rent)
        print("Area:", self.area)
        print(self.is_affordable())
        print("---")

    def is_affordable(self):
        return "Affordable" if self.rent < 8000 else "Expensive"


listing1 = Listing("1BHK", 7000, "RS Puram")
listing2 = Listing("2BHK", 12000, "Gandhipuram")

listing1.show()
listing2.show()
