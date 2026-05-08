# Ex1_TryCatch.py
import json
try:
    # TODO: Open "fake_file.json" in read mode
    # TODO: Load the JSON data
    with open("fake_file.json", "r") as f:
        data = json.load(f)

except FileNotFoundError:
    # TODO: Print a friendly error message
    print("File not found")
