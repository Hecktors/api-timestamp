# API Project: Timestamp Microservice for FCC

1. The API endpoint is `GET [project_url]/api/timestamp/:date_string?`

3. If the date string is **empty** it triggers `new Date()`.
4. If the date string is **valid** the api returns a JSON having the structure 
`{"unix": <date.getTime()>, "utc" : <date.toUTCString()> }`
e.g. `{"unix": 1479663089000 ,"utc": "Sun, 20 Nov 2016 17:31:29 GMT"}`.
5. If the date string is **invalid** the api returns a JSON having the structure `{"error" : "Invalid Date" }`.

#### Example usage:
* https://uneven-mini-columnist.glitch.me/api/timestamp/2020-12-24
* https://uneven-mini-columnist.glitch.me/api/timestamp/1608768000000

#### Example output:
* {"unix":1608768000000,"utc":"Thu, 24 Dec 2020 00:00:00 GMT"}