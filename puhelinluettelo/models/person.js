const mongoose = require('mongoose')
var uniqueValidator = require('mongoose-unique-validator');

const url = process.env.MONGODB_URI

console.log('connecting to', url)
mongoose.connect(url)
    .then(result => {
        console.log('Connection successful')

    }).catch((error) => {
        console.log('Error in connection', error.message)
    })


const personSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    number: 'Number'
  }).set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })


personSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Person', personSchema)