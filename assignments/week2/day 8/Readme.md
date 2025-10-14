HTTP works with methods like GET to fetch data, POST to create new data, PUT to update, and DELETE to remove. Every request gets a status code, like 200 for OK, 404 for Not Found, or 500 for server errors. Requests and responses can also include headers (extra info like content type or authorization) and a body carrying the actual data. REST APIs use these concepts to stay simple and consistent: endpoints represent resources, each method does a specific action, responses return clear status codes, and every request is stateless so it doesn’t rely on previous calls. Following these practices makes APIs easier to understand, maintain, and use across different clients.

---

1. JSONPLACEHOLDER
   url: https://jsonplaceholder.typicode.com/

endpoints i tried:

- GET /posts -> gives list of fake posts
- GET /posts/1 -> single post
- POST /posts -> to create new post (it just returns dummy data)
- PUT /posts/1 -> update existing post
- DELETE /posts/1 -> delete post

sample response from GET /posts/1:
{
"userId": 1,
"id": 1,
"title": "sunt aut facere repellat provident occaecati excepturi",
"body": "quia et suscipit..."
}

status codes i saw:
200 ok (get)
201 created (post)
404 not found (wrong id)
didn’t get 500 though

---

2. OPEN WEATHER MAP
   url: https://api.openweathermap.org/data/2.5/
   (note: needs api key, i used free one)

endpoints tested:

- GET /weather?q=London&appid=apikey
- GET /forecast?q=Delhi&appid=apikey

response looked like this:
{
"weather":[{"main":"Clouds"}],
"main":{"temp":300.15,"humidity":64},
"name":"London"
}

status codes:
200 ok
401 unauthorized (when key missing)
404 city not found (tested random city name)
