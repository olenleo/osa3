const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
app.use(express.static('build'))
app.use(express.json())

// Create token for converting result body into JSON string
morgan.token('json-content', (req, res) => JSON.stringify(req.body));
// Use morgan the necessary elements
app.use(morgan(':method :url [:status] :response-time :json-content'))


app.use(cors())

let persons = [
  {
    id: 1,
    name: "Artsi",
    number: 333515525
  },
  {
    id: 2,
    name: "Lefa",
    number: 124214
  },
  {
    id: 3,
    name: "Tina",
    number: 555214252
  }
  ,
  {
    id: 4,
    name: "Patrick",
    number: 401234567
  }
]

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

app.get('/', (req,res) => {
  res.send('<h1>Tervetuloa</h1>')

})

app.get('/api/persons/', (req, res) => {
    console.log('TULI PYYNTÖÖ')
    let data = []
    persons.forEach(p => data.push(p))
    console.log('DATA', data)
    res.send(data)
})

app.get('/info/', (req, res) => {
    const num = persons.length
    const date = new Date().toISOString()
    res.send(`<p>Phonebook has info for ${num} people </p><p>${date}`)
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
  const PORT = process.env.PORT || 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
