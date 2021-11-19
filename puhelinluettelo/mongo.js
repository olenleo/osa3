const mongoose = require('mongoose')
const personSchema = new mongoose.Schema({
    name: String,
    number: 'Number'
})
const Person = mongoose.model('Person', personSchema)

if (process.argv.length == 3) {
    listPersons()
} else if (process.argv.length == 5) {
    const name = process.argv[3]
    const number = process.argv[4]
    addPerson(name, number)
} else {
    console.log('Wrong amount of parameters')
}

const password = process.argv[2]



const url = `mongodb+srv://olenleo:${password}@cluster0.audlu.mongodb.net/puhelinluettelo?retryWrites=true&w=majority`
mongoose.connect(url)


function listPersons() {
    console.log('Phonebook: ')
    Person.find({}).then(res => {
        res.forEach(person => {
            console.log(person.name, " - ", person.number)
        })
        mongoose.connection.close()
    });
}

function addPerson(name, number) {
    const newPersonToAdd = new Person({
        name: name,
        number: number
      })
    newPersonToAdd.save().then(res => {
        console.log('Add new person complete')
        mongoose.connection.close()
    })
}