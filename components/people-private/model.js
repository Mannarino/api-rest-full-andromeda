const mongoose = require('mongoose')

const peopleScheme =  
		mongoose.Schema({
			name:{type:String,required:true},
			birthDay:{type:Date,required:true },
			yearPassAway:{type:Date},
			passAway:{type:Boolean },
			photo:{type:String,required:true},
			category:[{type:String,
					  required:true,
					  enum:['woman','man','dead','alive']}],
		})
const modelPeople = mongoose.model('people',peopleScheme)

module.exports = modelPeople