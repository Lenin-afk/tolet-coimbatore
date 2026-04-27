def show_listing(title, rent, area):
    print("Title:", title)
    print("Rent:", rent)
    print("Area:", area)
    print("Affordable:", is_affordable(rent))
    print("---")
def is_affordable(rent):
    return True if rent< 8000 else False
    
show_listing("1BHK in RS Puram", 7000, "RS Puram")
show_listing("2BHK in Gandhipuram", 12000, "Gandhipuram")
