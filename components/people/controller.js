const model = require('./model')

const controllerPeople = {
	createPerson: async (name,birthDate,photo,category)=>{

		const createdPerson= await model.create({
			name:name,
			birthDate:birthDate,
			photo:photo,
			category:category
		})
        return createdPerson
	},
	getAllPeople: async ()=>{

		const completeList= await model.find({})
		
        return completeList
	},
	getPeopleByCategory: async (category)=>{

		const listPeopleCategoriy= await model.find({category:category})
		
        return listPeopleCategoriy
	}
	,
	getPersonById: async (id)=>{

		const personById= await model.findById(id)
		
        return personById
	}
	,
	updatePersonById: async (id,body)=>{

		const updatedPerson= await model.findByIdAndUpdate(id,body)
		
        return updatedPerson
	},
	deletePersonById: async (id)=>{

		const eliminatedPerson= await model.findByIdAndDelete(id)
		
        return eliminatedPerson
	}
}

module.exports = controllerPeople