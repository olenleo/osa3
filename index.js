const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const Person = require('./models/person')

app.use(express.static('build'))
app.use(cors())
app.use(express.json())

const morgan = require('morgan')
const { response } = require('express')

morgan.token('json-content', (req, res) => JSON.stringify(req.body));
app.use(morgan(':method :url [:status] :response-time :json-content'))

let numberOfPersons = 0

app.post('/api/persons', (req, res, next) => {
  const body = req.body

  if (!body.name || !body.number) {
      return res.status(400).json({ error: 'content missing' })
  }

  const person = new Person({
      name: body.name,
      number: body.number,
  })

  person
    .save()
    .then(savedPerson => res.json(savedPerson))
    .catch(error => next(error))
})

app.get('/', (req,res) => {
  res.redirect('/api/persons/');
})

app.get('/api/persons/', (req, res) => {
    Person.find({}).then(persons => {
      res.json(persons) 
      numberOfPersons = persons.length
    })
    
})

app.get('/info/', (req, res) => {
    Person.find({}).then(persons => {
      numberOfPersons = persons.length
    })

    res.send(`<p>Phonebook contains ${numberOfPersons} objects.</p>
    <p>${Date().toString()}</p>`)
})

app.get('/api/persons/:id', (request, response) => {
    Person.findById(request.params.id).then(person => {
      response.json(person)
    })
})

app.delete('/api/persons/:id', (request, response, next) => {
    Person.findByIdAndDelete(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))
  })


app.put('/api/persons/:id', (request, response, next) => {
  const body = request.body
  const person = {
    name: body.name,
    number: body.number
    }
  Person.findByIdAndUpdate(request.params.id, person, {
    new: true, 
    runValidators: true,
    context: 'query',
  })
  .then(person => {
    if (person) {response.json(person)}
    else { response.status(400).end()}
  })
  .catch(error => next(error))
})


const unknownEndpoint= (request, response) => {
  response.status(404).send({ error: 'Unkown endpoint'})
}

app.use(unknownEndpoint)


const errorHandler = (error, request, response, next) => {
  
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).send({ error: error.message })
  }

  next(error)
}

app.use(errorHandler)
const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`SERVER running on port ${PORT}`)  
})