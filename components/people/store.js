const model = require('./model')

const storePeople = {
	createPersonStore: async (name,birthDay,passAway,yearPassAway,photo,category,viewAllowed)=>{
        
        if(yearPassAway === undefined){
            //notDiedYet = date that means that person has not died yet
        	const notDiedYet = new Date("1000-01-01")
        	const passAway = notDiedYet
        }
		const createdPerson= await model.create({
			name,
			birthDay,			
			passAway,
			yearPassAway,
			photo,
			category,
			viewAllowed
		})
	
        return createdPerson
	},
	//--------metodos store para el controlador freeAndPlatinoController
	getCountFreeAndPlatinoPeopleStore: async ()=>{  
		let response = await model.find({ viewAllowed:{$ne:'gold'}}).count()
		console.log(response)
		let numeroDePeopleFreeandPlatino = {categoria:"free and platino",numero:response}	
        return numeroDePeopleFreeandPlatino
	},
	getFreeAndPlatinoPeopleStore: async (skip,limit)=>{   
		/*When methods skip and limit receive an invalid value, 
		they automatically ignore it and do not act, and 
		only work when they receive a valid integer */  	
		let response = await model.find({ viewAllowed:  {$ne:'gold'}})	  
        return response	
	},
	getPaginationFreeAndPlatinoPeopleStore: async (skip,limit)=>{   
		/*When methods skip and limit receive an invalid value, 
		they automatically ignore it and do not act, and 
		only work when they receive a valid integer */  	
		let response = await model.find(
			{ viewAllowed:  {$ne:'gold'}}	   
			)
			  .skip(skip)
			  .limit(limit)
			  /*.count()*/
        return response	
	},
	//------ fin metodos store para el controlador freeAndPlatinoController

	//--------metodos store para el controlador goldPeopleController
	getCountGoldPeopleStore: async ()=>{  
		let response = await model.find({ viewAllowed:'gold'}).count()
		console.log(response)
		let numeroDePeopleGold = {categoria:"gold",numero:response}	
        return numeroDePeopleGold
	},
	getGoldPeopleStore: async ()=>{  
		let response = await model.find({ viewAllowed:'gold'})
		
        return response
	},
	getPaginationGoldPeopleStore: async (skip,limit)=>{  
		let response = await model.find({ viewAllowed:'gold'}).skip(skip).limit(limit)
        return response
	},
	//------ fin metodos store para el controlador goldPeopleoController



	getAllPeopleStore: async (skip,limit,category)=>{   
		/*When methods skip and limit receive an invalid value, 
		they automatically ignore it and do not act, and 
		only work when they receive a valid integer */  
		if(category){
			let response = await model.find({})
												.skip(skip)
												.limit(limit)
        	return response
		}  
		const completeList= await model.find({})
											.skip(skip)
											.limit(limit)	
	    return completeList
	},
	
	/* getPersonById: async (id)=>{

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

module.exports = storePeople