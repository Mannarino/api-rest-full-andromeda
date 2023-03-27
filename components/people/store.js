const model = require('./model')

const storePeople = {
	createPersonStore: async (name,birthDay,passAway,photo,category,viewAllowed)=>{
        const PersonCompletyToRespond ={}
        if(passAway === undefined){
            //notDiedYet = date that means that person has not died yet
        	notDiedYet = new Date("1000-01-01")
        	passAway = notDiedYet
        }
		const createdPerson= await model.create({
			name:name,
			birthDay:birthDay,			
			passAway:passAway,
			photo:photo,
			category:category,
			viewAllowed:viewAllowed
		})
	
        return createdPerson
	},
	getPeopleStore: async (skip,limit,category)=>{   
		/*When methods skip and limit receive an invalid value, 
		they automatically ignore it and do not act, and 
		only work when they receive a valid integer */  
		if(category){
			let response = await model.find({category:category})
												.skip(skip)
												.limit(limit)
        	return response
		}  
		const completeList= await model.find({})
											.skip(skip)
											.limit(limit)	
	    return completeList
	},
	
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

module.exports = storePeople