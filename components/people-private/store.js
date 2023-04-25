const model = require('./model')

const storePeople = {
	createPersonStore: async (name,birthDay,passAway,yearPassAway,photo,category)=>{
        
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
			category
		})
	
        return createdPerson
	},
	

	//--------metodos store para el controlador PrivatePeopleController
	getCountByCategoryPrivatePeopleStore: async (category)=>{  
		let response = await model.find({ category:category}).count()
		let numeroDePeopleEnlaCategoria = {categoria:category,numero:response}
		//nota: creo un objeto y retorno un objeto porque si retorno 
		//un solo numero me da error en la respuesta de express ya que espera responder
		//un json y no un numero	
        return numeroDePeopleEnlaCategoria
	},
	
	getCountPrivatePeopleStore: async ()=>{  
		let response = await model.find({}).count()
		console.log(response)
		let numeroDePeoplePrivate = {categoria:"private",numero:response}	
        return numeroDePeoplePrivate
	},
	getBuscadorPrivatePeopleStore: async (buscador)=>{
	    const regex = new RegExp(buscador, 'i');
		let response = await model.find({ name: regex})
			
        return response
	},
	getPrivatePeopleStore: async ()=>{  
		let response = await model.find({})
		
        return response
	},
	getByCategoriaPrivatePeopleStore: async (skip,limit,category)=>{   
		/*When methods skip and limit receive an invalid value, 
		they automatically ignore it and do not act, and 
		only work when they receive a valid integer */  	
		let response = await model.find({ category: category})	

        return response	
	},
	getByCategoriaAndPaginationPrivatePeopleStore: async (skip,limit,category)=>{   
		/*When methods skip and limit receive an invalid value, 
		they automatically ignore it and do not act, and 
		only work when they receive a valid integer */  	
		let response = await model.find({ category: category}).skip(skip).limit(limit)  
        return response	
			 
	},
	
	getPaginationPrivatePeopleStore: async (skip,limit)=>{  
		let response = await model.find({}).skip(skip).limit(limit)
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