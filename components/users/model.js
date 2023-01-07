const mongoose = require('mongoose')

var userScheme=  mongoose.Schema({
	name: String,
	email: String,
	password :String,
	rol: {
    type: String,
    enum: ['basic', 'platino','gold','superadmin'],
    default : 'basic'
  }
})

var modelUsers = mongoose.model('user',userScheme)

module.exports = modelUsers