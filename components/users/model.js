const mongoose = require('mongoose')

var userScheme=  mongoose.Schema({
	name: String,
	email: String,
	password :String
})

var modelUsers = mongoose.model('user',userScheme)

module.exports = modelUsers