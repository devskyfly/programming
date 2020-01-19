import requests

response = requests.get('https://api.github.com/search/repositories', params={'q': 'requests+language:python'})

code = response.status_code

if code == 200:
    print("Success")
    headers = response.headers;

    for header_item in headers:
        print(f"{header_item}: {headers[header_item]}")

    json = response.json()
    for json_item in json:
        print(json_item)
else:
    print("Fail")