const store = require('./store.js')
const helpers = require('./helpers.js')

const controllerPeople = {
	createPersonController: async (name,birthDay,passAway,yearPassAway,photo,category)=>{
        
		const createdPerson= await store.createPersonStore(
			name,
			birthDay,
			passAway,
			yearPassAway,
			photo,
			category
		)
		
        return createdPerson
	},
	// controlador para endpoint free and platino
	publicPeopleController: async (skip,limit,countElements,category,buscador)=>{
	  	if(countElements && category){
	    	let countPeople  = await store.getCountByCategoryPublicPeopleStore(category)
        	return countPeople	
	    }
	  	if(countElements){
	    	let countPeople  = await store.getCountPublicPeopleStore()
        	return countPeople	
	    }
	    if(buscador){
	    	let countPeople  = await store.getBuscadorPublicPeopleStore(buscador)
        	return countPeople	
	    }
	    
	    if(category){
		    	if(!skip && !limit){
		    	let people  = await store.getByCategoriaPublicPeopleStore(skip,limit,category)
	        	let response = helpers.addAgeOnList(people)
	        	return response  
		    }else{
		    	let people  = await store.getByCategoriaPublicPeopleStore(skip,limit,category)
	        	let response = helpers.addAgeOnList(people)
	        	return response 
		    }
	    }
	    if(!skip && !limit){
	    	let people  = await store.getAllPublicPeopleStore()
        	let response = helpers.addAgeOnList(people)
        	return response  
	    }
	    
	  	let people  = await store.getPaginationPublicPeopleStore(skip,limit)
	  	let response = helpers.addAgeOnList(people)
        return response     
	},
	// fin controlador para endpoint free and platino

	
	getPersonByIdController: async (id)=>{

		const updatedPerson= await store.getPersonByIdStore(id)
		
        return updatedPerson
	},
	updatePersonController: async (id,body)=>{

		const updatedPerson= await store.updatePersonStore(id,body)
		
        return updatedPerson
	},
	deletePersonByIdController: async (id)=>{

		const eliminatedPerson= await store.deletePersonByIdStore(id)
		
        return eliminatedPerson
	}
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