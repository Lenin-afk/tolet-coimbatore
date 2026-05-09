# Ex2_Utils.py

# TODO: Import Listing from listing.py
# TODO: Import filter_affordable and show_all from utils.py
# TODO: Create 3 listing objects
from listing import Listing
from utils import filter_affordable,show_all

listings = [ Listing("1BHK", 7000, "RS Puram", "9876543210"),
            Listing("2BHK", 10000, "Sitra", "8795256315"),
            Listing("3BHK", 15000, "Hopes", "9816565521"),
            Listing("1BHK", 6500, "Saibaba Colony", "6852354789")
]

# TODO: Call show_all() on listings
# TODO: Print "--- Affordable Only ---"
# TODO: Call filter_affordable() and pass result to show_all()
show_all(listings)
print("--- Affordable Only ---")
result=filter_affordable(listings)
show_all(result)
