What happens when a user wants to see all the films?

C
Read
U
D

1. in the browser
  Blank page, clicks a link

2. in react
  fetch.get(http://localhost:3000/films) GET (HTTP request) -> because we want to READ data

CLIENT SIDE -> eg: Postman, mobile phone, web browser, Alexa
--------------------------------------------------------------------------------
SERVER SIDE -> eg: Express on Heroku / Glitch

3. in express
  connect to the database using connection string (which has password in - should be stored in a .env file)
  collection = db.collection('movies')
  app.get('/films') -> listening for incoming fetch request from React

4. in express
  const queryObject = {}
  collection('movies').find(queryObject) -> find all the movies in the database

--------------------------------------------------------------------------------
PERSISTANCE LAYER -> eg: mongodb / altas

5. we don't care

--------------------------------------------------------------------------------
SERVER-SIDE

6. in express
  result.toArray() -> records -> response.send(records) (HTTP response)

--------------------------------------------------------------------------------
CLIENT-SIDE

7. in react
  res.json() -> movies -> setMovies(movies)

8. component
  {movies.map(movie => <li>{movie.title}</li>)}
