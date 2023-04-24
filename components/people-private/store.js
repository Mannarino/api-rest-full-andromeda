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

	getCountByCategoryFreeAndPlatinoPeopleStore: async (category)=>{  
		let response = await model.find({ category:category}).count()
		let numeroDePeopleEnlaCategoria = {categoria:"free and platino",numero:response}
		//nota: creo un objeto y retorno un objeto porque si retorno 
		//un solo numero me da error en la respuesta de express ya que espera responder
		//un json y no un numero	
        return numeroDePeopleEnlaCategoria
	},
	getCountByViewAllowedFreeAndPlatinoPeopleStore: async (viewAllowed)=>{  
		let response = await model.find({ viewAllowed:viewAllowed}).count()
		let numeroDePeopleEnlaViewAllowed = {viewAllowed:viewAllowed,numero:response}
		//nota: creo un objeto y retorno un objeto porque si retorno 
		//un solo numero me da error en la respuesta de express ya que espera responder
		//un json y no un numero	
        return numeroDePeopleEnlaViewAllowed
	},
	getCountFreeAndPlatinoPeopleStore: async ()=>{  
		let response = await model.find({ viewAllowed:{$ne:'gold'}}).count()
		console.log(response)
		let numeroDePeopleFreeandPlatino = {categoria:"free and platino",numero:response}	
        return numeroDePeopleFreeandPlatino
	},
	getBuscadorFreeAndPlatinoPeopleStore: async (buscador)=>{
	    const regex = new RegExp(buscador, 'i');
		let response = await model.find({ name: regex})
			
        return response
	},
	getAllFreeAndPlatinoPeopleStore: async (skip,limit)=>{   
		/*When methods skip and limit receive an invalid value, 
		they automatically ignore it and do not act, and 
		only work when they receive a valid integer */  	
		let response = await model.find({ viewAllowed:  {$ne:'gold'}})	  
        return response	
	},
	getByCategoriaFreeAndPlatinoPeopleStore: async (skip,limit,category)=>{   
		/*When methods skip and limit receive an invalid value, 
		they automatically ignore it and do not act, and 
		only work when they receive a valid integer */  	
		let response = await model.find({ category: category})	

        return response	
	},
	getByCategoriaAndPaginationFreeAndPlatinoPeopleStore: async (skip,limit,category)=>{   
		/*When methods skip and limit receive an invalid value, 
		they automatically ignore it and do not act, and 
		only work when they receive a valid integer */  	
		let response = await model.find({ category: category}).skip(skip).limit(limit)  
        return response	
			 
	},
	getByViewAllowedFreeAndPlatinoPeopleStore: async (skip,limit,viewAllowed)=>{   
		/*When methods skip and limit receive an invalid value, 
		they automatically ignore it and do not act, and 
		only work when they receive a valid integer */  	
		let response = await model.find({ viewAllowed: viewAllowed})	

        return response	
	},
	getByViewAllowedAndPaginationFreeAndPlatinoPeopleStore: async (skip,limit,viewAllowed)=>{   
		/*When methods skip and limit receive an invalid value, 
		they automatically ignore it and do not act, and 
		only work when they receive a valid integer */  	
		let response = await model.find({ viewAllowed: viewAllowed}).skip(skip).limit(limit)  
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
	getCountByCategoryGoldPeopleStore: async (category)=>{  
		let response = await model.find({ category:category}).count()
		let numeroDePeopleEnlaCategoria = {categoria:category,numero:response}
		//nota: creo un objeto y retorno un objeto porque si retorno 
		//un solo numero me da error en la respuesta de express ya que espera responder
		//un json y no un numero	
        return numeroDePeopleEnlaCategoria
	},
	getCountByViewAllowedGoldPeopleStore: async (viewAllowed)=>{  
		let response = await model.find({ viewAllowed:viewAllowed}).count()
		let numeroDePeopleEnlaViewAllowed = {viewAllowed:viewAllowed,numero:response}
		//nota: creo un objeto y retorno un objeto porque si retorno 
		//un solo numero me da error en la respuesta de express ya que espera responder
		//un json y no un numero	
        return numeroDePeopleEnlaViewAllowed
	},
	getCountGoldPeopleStore: async ()=>{  
		let response = await model.find({ viewAllowed:'gold'}).count()
		console.log(response)
		let numeroDePeopleGold = {categoria:"gold",numero:response}	
        return numeroDePeopleGold
	},
	getBuscadorGoldPeopleStore: async (buscador)=>{
	    const regex = new RegExp(buscador, 'i');
		let response = await model.find({ name: regex})
			
        return response
	},
	getGoldPeopleStore: async ()=>{  
		let response = await model.find({ viewAllowed:'gold'})
		
        return response
	},
	getByCategoriaGoldPeopleStore: async (skip,limit,category)=>{   
		/*When methods skip and limit receive an invalid value, 
		they automatically ignore it and do not act, and 
		only work when they receive a valid integer */  	
		let response = await model.find({ category: category})	

        return response	
	},
	getByCategoriaAndPaginationGoldPeopleStore: async (skip,limit,category)=>{   
		/*When methods skip and limit receive an invalid value, 
		they automatically ignore it and do not act, and 
		only work when they receive a valid integer */  	
		let response = await model.find({ category: category}).skip(skip).limit(limit)  
        return response	
			 
	},
	getByViewAllowedGoldPeopleStore: async (skip,limit,viewAllowed)=>{   
		/*When methods skip and limit receive an invalid value, 
		they automatically ignore it and do not act, and 
		only work when they receive a valid integer */  	
		let response = await model.find({ viewAllowed: viewAllowed})	

        return response	
	},
	getByViewAllowedAndPaginationGoldPeopleStore: async (skip,limit,viewAllowed)=>{   
		/*When methods skip and limit receive an invalid value, 
		they automatically ignore it and do not act, and 
		only work when they receive a valid integer */  	
		let response = await model.find({ viewAllowed: viewAllowed}).skip(skip).limit(limit)  
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
	updatePersonStore: async(id,body)=>{
		const updatedPerson= await model.findByIdAndUpdate(id,body)
		
        return updatedPerson
	}

	
	,getPersonByIdStore: async (id)=>{

		const personById= await model.findById(id)
		
        return personById
	}
	,
	deletePersonByIdStore: async (id)=>{

		const eliminatedPerson= await model.findByIdAndDelete(id)
		
        return eliminatedPerson
	}
}

module.exports = storePeople