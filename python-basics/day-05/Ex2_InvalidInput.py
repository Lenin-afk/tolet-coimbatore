# Ex2_InvalidInput.py

# TODO: Ask user to enter a rent amount using input()
rent = input()

try:
    # TODO: Convert rent to integer
    rent = int(rent)
    print("Rent entered:", rent)

except ValueError:
    # TODO: Print friendly error message
    print("Error in input")
