const store = require('./store.js')

const controllerPeople = {
	createPersonController: async (name,birthDay,passAway,photo,category,viewAllowed)=>{
        const PersonCompletyToRespond ={}
		const createdPerson= await store.createPersonStore(
			name,
			birthDay,
			passAway,
			photo,
			category,
			viewAllowed
		)
		function getAge(){
			let today = new Date()
			let dateOfBirth= createdPerson.birthDay
			let age = today.getFullYear() - dateOfBirth.getFullYear()
			let differenceMonths = today.getMonth() - dateOfBirth.getMonth()
			if(differenceMonths < 0){
				age--
			}
			return age
		}
		age = getAge()
        //I created this another objetc called PersonCompletyToRespond
        // because the objetc that mongoose gave me ,it is not writable, so that
        // don't let me to add the property age to the objetc respond
        PersonCompletyToRespond.name=createdPerson.name
        PersonCompletyToRespond.birthDay=createdPerson.birthDay
        PersonCompletyToRespond.photo=createdPerson.photo
        PersonCompletyToRespond.category=createdPerson.category
        PersonCompletyToRespond.age=age
        PersonCompletyToRespond.viewAllowed=viewAllowed
        return PersonCompletyToRespond
	},
	getPeopleController: async (skip,limit,category)=>{
	  	let response  = await store.getPeopleStore(skip,limit,category)
        return response
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