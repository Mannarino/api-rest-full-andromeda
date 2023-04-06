const mongoose = require('mongoose')

var userScheme=  mongoose.Schema({
	name: String,
	email: String,
	password :String,
	rol: {
	    type: String,
	    enum: ['free', 'platino','gold'],
	    default : 'free'
	  }
})

var modelUsers = mongoose.model('user',userScheme)

module.exports = modelUsers