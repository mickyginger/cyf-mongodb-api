const express = require('express')
const mongodb = require('mongodb')
const dotenv = require('dotenv')
const mongoOptions = {useUnifiedTopology: true}
dotenv.config()
const uri = process.env.DATABASE_URI
const client = new mongodb.MongoClient(uri, mongoOptions)

const app = express()
app.use(express.json())

client.connect(function () {
  const db = client.db('mongo-week3')

  app.get('/films', function (request, response) {
    const collection = db.collection('movies')
    collection.find().toArray((error, movies) => {
      if (error) {
        console.log(error)
        response.status(500).send(error)
      } else {
        response.status(200).send(movies)
      }
    })
  })

  app.get('/films/:id', function (request, response) {
    const collection = db.collection('movies')
    const newId = new mongodb.ObjectID(request.params.id)
    const searchObject = {_id: id}
    if (!mongodb.ObjectID.isValid(newId)) {
      return response.sendStatus(404)
    }
    collection.findOne(searchObject, function (error, result) {
      if (!result) {
        return response.status(404)
      }
      if (error) {
        return response.sendStatus(500).send(error)
      }
      return response.send(result)

      client.close()
    })
  })

  app.post('/films', function (request, response) {
    response.send('Create a film')
  })

  app.put('/films/:id', function (request, response) {
    response.send('Update one film')
  })

  app.delete('/films/:id', function (request, response) {
    response.send('Delete one film')
  })

  app.listen(3000, () => {
    console.log(`Server running and listening`)
  })
})
