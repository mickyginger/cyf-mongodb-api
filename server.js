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
      return response.status(200).send(result)

      client.close()
    })
  })

  app.post('/films', function (request, response) {
    const collection = db.collection('movies')

    const newMovie = request.body // more validations cab done here

    collection.insertOne(newMovie, function (error, result) {
      if (error) {
        console.log(error)
        return response.status(500).send(error)
      }
      return response.status(200).send(result.ops[0])
    })
  })

  app.put('/films/:id', function (request, response) {
    const collection = db.collection('movies')
    const {id} = request.params

    if (!mongodb.ObjectID.isValid(id)) {
      return response.sendStatus(404)
    }

    const newId = new mongodb.ObjectID(id)
    const searchObject = {
      _id: newId,
    }
    delete request.body._id
    const updateObject = {
      $set: request.body,
    }

    collection.findOneAndUpdate(
      searchObject,
      updateObject,
      options,
      (error, result) => {
        if (error) {
          return response.send(error)
        }

        return response.send(result.value) //result.value===result.ops[0]
      }
    )
  })

  app.delete('/films/:id', function (request, response) {
    const collection = db.collection('movies')
    const newId = new mongodb.ObjectID(request.params.id)
    const searchObject = {_id: id}
    if (!mongodb.ObjectID.isValid(newId)) {
      return response.sendStatus(404)
    }
    collection.deleteOne(searchObject, function (error, result) {
      if (!result) {
        return response.status(404)
      }
      if (error) {
        return response.sendStatus(500).send(error)
      }
      return response.status(200).send(result)

      client.close()
    })
  })

  app.listen(3000, () => {
    console.log(`Server running and listening`)
  })
})
