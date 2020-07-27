What happens when a user wants to see a single film?

C
Read
U
D

1. in the browser
  Blank page, clicks a link

2. in react
  fetch.get(http://localhost:3000/films/:id) GET (HTTP request) -> because we want to READ data

CLIENT SIDE -> eg: Postman, mobile phone, web browser, Alexa
--------------------------------------------------------------------------------
SERVER SIDE -> eg: Express on Heroku / Glitch

3. in express
  connect to the database using connection string (which has password in - should be stored in a .env file)
  collection = db.collection('movies')
  app.get('/films/:id') -> listening for incoming fetch request from React

4. in express
  const queryObject = { \_id: new mongodb.ObjectID(req.params.id) }
  collection('movies').findOne(queryObject) -> find the movies in the database by it's ID

--------------------------------------------------------------------------------
PERSISTANCE LAYER -> eg: mongodb / altas

5. we don't care

--------------------------------------------------------------------------------
SERVER-SIDE

6. in express
  record -> response.send(record) (HTTP response) if we found the movie or 404 if not

--------------------------------------------------------------------------------
CLIENT-SIDE

7. in react
  res.json() -> movies -> setMovie(movie)

8. component
  <h1>{movie.title}</h1>
