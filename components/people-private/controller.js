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
	
	

	// controlador para endpoint gold
	privatePeopleController: async (skip,limit,count,category,buscador)=>{
		console.log('se entro al controllador private')
		console.log(count)
		if(count && category){
	    	let countPeople  = await store.getCountByCategoryPrivatePeopleStore(category)
        	return countPeople	
	    }
		if(count){
			console.log('se consulto la cantidad en people private')
			let countPeople  = await store.getCountPrivatePeopleStore()
        	return countPeople
		}
		if(buscador){
	    	let countPeople  = await store.getBuscadorPrivatePeopleStore(buscador)
        	return countPeople	
	    }
	    
	    if(category){
		    	if(!skip && !limit){
		    	let people  = await store.getByCategoriaPrivatePeopleStore(skip,limit,category)
	        	let response = helpers.addAgeOnList(people)
	        	return response  
		    }else{
		    	let people  = await store.getByCategoriaAndPaginationPrivatePeopleStore(skip,limit,category)
	        	let response = helpers.addAgeOnList(people)
	        	return response 
		    }
	    }
	  	if(!skip && !limit){
	    	let people  = await store.getPrivatePeopleStore()
	  		let response = helpers.addAgeOnList(people)
        	return response     
	    }
	    
	    let people  = await store.getPaginationPrivatePeopleStore(skip,limit)
	  	let response = helpers.addAgeOnList(people)
       	return response     
	   
	},
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