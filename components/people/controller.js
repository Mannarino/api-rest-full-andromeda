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
	// controlador para endpoint free and platino
	freeAndPlatinoPeopleController: async (skip,limit,countElements)=>{
	  	if(countElements){
	    	let countPeople  = await store.getCountFreeAndPlatinoPeopleStore()
        	return countPeople	
	    }
	    if(!skip && !limit){
	    	let people  = await store.getAllFreeAndPlatinoPeopleStore()
        	let response = helpers.addAgeOnList(people)
        	return response  
	    }
	  	let people  = await store.getPaginationFreeAndPlatinoPeopleStore(skip,limit)
	  	let response = helpers.addAgeOnList(people)
        return response     
	},
	// fin controlador para endpoint free and platino

	// controlador para endpoint gold
	goldPeopleController: async (skip,limit,countElements)=>{
		
		if(countElements){
			let countPeople  = await store.getCountGoldPeopleStore()
        	return countPeople
		}
	  	if(skip && limit){
	    	let people  = await store.getPaginationGoldPeopleStore(skip,limit)
	  		let response = helpers.addAgeOnList(people)
        	return response     
	    }
	    
	    let people  = await store.getGoldPeopleStore(skip,limit)
	  	let response = helpers.addAgeOnList(people)
       	return response     
	   
	},
	// controlador para endpoint all
	/*goldPeopleController(skip,limit,membresia,countElements){
		if(all){
			let people  = await store.getAllPeopleStore(skip,limit)
	  		let response = helpers.addAgeOnList(people)
        	return response
		}
		if(countElements){
			let countPeople  = await store.getCountGoldPeopleStore()
        	return countPeople
		}
	  	if(skip && limit && all){
	    	let people  = await store.getPaginationAllPeopleStore(skip,limit)
	  		let response = helpers.addAgeOnList(people)
        	return response     
	    }
	    if(skip && limit){
	    	let people  = await store.getPaginationGoldPeopleStore(skip,limit)
	  		let response = helpers.addAgeOnList(people)
        	return response     
	    }
	    if(membresia){
	    	let people  = await store.getByMembresiaPeopleStore(skip,limit)
	  		let response = helpers.addAgeOnList(people)
        	return response
	    }
	    if(skip && limit && membresia){
	    	let people  = await store.getPaginationByMembresiaPeopleStore(skip,limit)
	  		let response = helpers.addAgeOnList(people)
        	return response     
	    }
	}, */

     



















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