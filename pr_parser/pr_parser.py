import requests
import json
import os.path

personality_type: int
github_id: str


def main():
    path = 'test.json'
    with open(path) as json_file:
        data = json.load(json_file)
        personality_type = data["type"]
        github_id = data["github_id"]

    print(personality_type, github_id)



if __name__ == '__main__':
    main()
