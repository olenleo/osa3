const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');


const url = process.env.MONGODB_URI

console.log('connecting to', url)
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    .then(result => {
        console.log('Connection successful')
    }).catch((error) => {
        console.log('Error in connection', error.message)
    })

    
const personSchema = new mongoose.Schema({
    name: {type: String, unique: true, minlength: 3},
    number: {type: String,minlength: 8}
  })
  
  
  personSchema.set('toJSON', {transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  } 
})

personSchema.plugin(uniqueValidator, { message: 'Error, expected {PATH} to be unique.' });



module.exports = mongoose.model('Person', personSchema)