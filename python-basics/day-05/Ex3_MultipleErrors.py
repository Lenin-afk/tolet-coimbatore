import json

# TODO: Ask user to enter a filename using input()
filename = input()

try:
    # TODO: Open the file in read mode
    # TODO: Load JSON data
    # TODO: Print number of listings found using len()
    with open(filename, "r") as f:
        data = json.load(f)
        print(len(data))

except FileNotFoundError:
    # TODO: Print "File not found!"
    print("File not found!")

except json.JSONDecodeError:
    # TODO: Print "File is not valid JSON!"
    print("File is not valid JSON!")
