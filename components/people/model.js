const mongoose = require('mongoose')

const peopleScheme =  mongoose.Schema({
	name:{type:String,required:true},
	birthDate:{type:Date,required:true },
	photo:{type:String,required:true},
	category:{type:String,required:true, enum:['woman','man','not-specified']}
})

const modelPeople = mongoose.model('people',peopleScheme)

module.exports = modelPeople