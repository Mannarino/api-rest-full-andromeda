const response = require('./../network/responses.js')

 function createPeopleValidation( req , res, next){
	try{
		const {name,
			birthDay,
			passAway,
			yearPassAway,
			photo,
			category,
			viewAllowed} = req.body
		if(!name){
			return response.error(req,res,{createPeople:false}," no enviaste el name")
		}
		if(!birthDay){
			return response.error(req,res,{createPeople:false}," no enviaste el birthDay")
		}
		if(passAway===null){
			return response.error(req,res,{createPeople:false}," no enviaste el passAway")
		}
		if(!yearPassAway){
			return response.error(req,res,{createPeople:false}," no enviaste el yearPassAway")
		}
		if(!photo){
			return response.error(req,res,{createPeople:false}," no enviaste el photo")
		}
		if(!category){
			return response.error(req,res,{createPeople:false}," no enviaste el category")
		}
		if(!viewAllowed){
			return response.error(req,res,{createPeople:false}," no enviaste el viewAllowed")
		}
		
		next()
	}
	catch{
		return response.error(req,res,{login:false}, "error interno del servidor")
	}
}

module.exports = createPeopleValidation