import requests


class GitHubAPI:
    def __init__(self):
        self.__base_url = 'https://api.github.com'

    def _get(self, route, body):
        return requests.get(self.__base_url + route, data=body.serialize())


print(requests.get('https://api.github.com'))
