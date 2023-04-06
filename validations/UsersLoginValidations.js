

const response = require('./../network/responses.js')

 function loginValidUser( req , res, next){
	try{
		const {email,password} = req.body
		if(!email){
			return response.error(req,res,{login:false}," no enviaste el mail")
		}
		if( !/\S+@\S+\.\S+/.test(email)){
			return response.error(req,res,{login:false}," no es un email")
		}
		if(!password){
			return response.error(req,res,{login:false}," no enviaste password")
		}
		next()
	}
	catch{
		return response.error(req,res,{login:false}, "error interno del servidor")
	}
}

module.exports = loginValidUser