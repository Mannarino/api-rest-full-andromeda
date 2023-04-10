const store = require('./store.js')
const helpers = require('./helpers.js')

const controllerPeople = {
	createPersonController: async (name,birthDay,passAway,yearPassAway,photo,category,viewAllowed)=>{
        
		const createdPerson= await store.createPersonStore(
			name,
			birthDay,
			passAway,
			yearPassAway,
			photo,
			category,
			viewAllowed
		)
		
        return createdPerson
	},
	getAllPeopleController: async (skip,limit,/*count*/)=>{
	  	let people  = await store.getAllPeopleStore(skip,limit,/*count*/)
	  	let response = helpers.addAgeOnList(people)
        return response
	},
	getFreeAndPlatinoPeopleController: async (skip,limit)=>{
	  	let people  = await store.getFreeAndPlatinoPeopleStore(skip,limit)
	  	let response = helpers.addAgeOnList(people)
        return response
	},
	/* controlador para obtener por categorias
	getPeopleController: async (skip,limit,category)=>{
	  	let people  = await store.getPeopleStore(skip,limit,category)
	  	let response = helpers.addAgeOnList(people)
        return response
	},
	/*getPeopleByCategory: async (category)=>{

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
	}*/
}

module.exports = controllerPeople