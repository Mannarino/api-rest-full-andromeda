const mongoose = require('mongoose')

var userScheme=  mongoose.Schema({
	name: String,
	email: {
	    type: String,
	    required: true,
	    unique: true // aquí se especifica que el campo debe ser único
	  },
	password :{
		type: String,
	    required: true
	  },
	rol: {
	    type: String,
	    enum: ['free', 'platino','gold'],
	    default : 'free'
	  }
})

var modelUsers = mongoose.model('user',userScheme)

module.exports = modelUsers