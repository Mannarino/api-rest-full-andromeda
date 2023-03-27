const mongoose = require('mongoose')

const peopleScheme =  
		mongoose.Schema({
			name:{type:String,required:true},
			birthDay:{type:Date,required:true },
			passAway:{type:Date},
			photo:{type:String,required:true},
			category:{type:String,
					  required:true,
					  enum:['woman','man','not-specified']},
			viewAllowed:{type:String,
				         required:true, 
				         enum:['free','gold']}
		})

const modelPeople = mongoose.model('people',peopleScheme)

module.exports = modelPeople