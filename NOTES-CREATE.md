What happens when a user wants to add a film?

Create
R
U
D

1. in the browser
  A blank form

2. in react
  fetch.post(http://localhost:3000/films) POST (HTTP request) -> because we want to CREATE data

CLIENT SIDE -> eg: Postman, mobile phone, web browser, Alexa
--------------------------------------------------------------------------------
SERVER SIDE -> eg: Express on Heroku / Glitch

3. in express
  connect to the database using connection string (which has password in - should be stored in a .env file)
  collection = db.collection('movies')
  app.post('/films') -> listening for incoming fetch request from React

4. in express
  const data = req.body (or something)
  collection('movies').insertOne(data) -> add data into the database

--------------------------------------------------------------------------------
PERSISTANCE LAYER -> eg: mongodb / altas

5. we don't care

--------------------------------------------------------------------------------
SERVER-SIDE

6. in express
  record -> response.send(record) (HTTP response) 200 if save successfully or 500 if not
--------------------------------------------------------------------------------
CLIENT-SIDE

7. in react
  display a success message / display the created film / redirect to see all of the films (inc the new film)
