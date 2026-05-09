# utils.py
from listing import Listing
def filter_affordable(listings):
    # TODO: Return only listings with rent < 8000
    result=[]
    for i in listings:
        if i.rent < 8000:
            result.append(i)
    return result

def show_all(listings):
    # TODO: Call show() on each listing
    for i in listings:
        i.show()
