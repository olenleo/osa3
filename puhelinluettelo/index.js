const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const Person = require('./models/person')

app.use(express.static('build'))
app.use(cors())
app.use(express.json())

const morgan = require('morgan')

morgan.token('json-content', (req, res) => JSON.stringify(req.body));
app.use(morgan(':method :url [:status] :response-time :json-content'))

app.post('/api/persons', (req, res, next) => {
  const body = req.body

  if (!body.name || !body.number) {
      return res.status(400).json({
          error: 'content missing'
      })
  }

  const person = new Person({
      name: body.name,
      number: body.number,
  })

  console.log(person)

  person.save().then(savedPerson => {
      res.json(savedPerson.toJSON())
  })
      .catch(error => next(error))
})

app.get('/', (req,res) => {
  res.send('<h1>Tervetuloa</h1>')

})

app.get('/api/persons/', (req, res) => {
    Person.find({}).then(persons => {
      res.json(persons)
    })
    
})

app.get('/info/', (req, res) => {
   // const num = persons.length
   // const date = new Date().toISOString()
    res.send(`<p>Infoa.</p>`)
})

app.get('/api/persons/:id', (request, response) => {
    Person.findById(request.params.id).then(person => {
      response.json(person)
    })
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
    response.status(204).end()
  })


app.put('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = request.body
  console.log(person)
  response.json(person)
})

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`SERVER running on port ${PORT}`)  
})