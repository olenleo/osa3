require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
const { response } = require('express')
const app = express()
const Person = require('./models/person')
app.use(express.static('build'))
app.use(express.json())
app.use(cors())
morgan.token('json-content', (req, res) => JSON.stringify(req.body));
app.use(morgan(':method :url [:status] :response-time :json-content'))

const PORT = process.env.PORT
console.log('PORT @ ', PORT)

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

app.get('/', (req,res) => {
  res.send('<h1>Tervetuloa</h1>')

})

app.get('/api/persons/', (req, res) => {
  console.log('Olet tässä')  
    Person.find({}).then(persons => {
      res.json(persons)
    })
    
})

app.get('/info/', (req, res) => {
   // const num = persons.length
   // const date = new Date().toISOString()
    res.send(`<p>hey bb </p>`)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    console.log('ID haettu', id)
    const person = persons.find(p => p.id === id)
    if (person) {
        response.json(person)
      } else {
        response.status(404).end()
      }
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
    response.status(204).end()
  })

app.post('/api/persons/', (request, response) => {
  const person = request.body
  console.log(person)
  if (!person.name || !person.number) {
    return response.status(400).json({ 
    error: 'name unt number missing' 
  })
  }
  (persons.forEach(p => {
    if (p.name == person.name) {
      return response.status(400).json({
        error: 'name must be unique'
      })
    }
  }))
  person.id = getRandomInt(1000000)
  persons = persons.concat(person)
  response.json(person)
  })

app.put('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = request.body
  console.log(person)
  response.json(person)
})

app.listen(PORT, () => {
  console.log(`SERVER running on port ${PORT}`)  
})