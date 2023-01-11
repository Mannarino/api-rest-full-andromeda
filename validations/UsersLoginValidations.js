const bcrypt = require('bcrypt')
const modelo = require('./../components/users/model.js')
const response = require('./../network/responses.js')

async function loginValidUser( req , res, next){
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
		const user = await modelo.findOne({email:email})
		if (!user) {
			return response.error(req,res,{login:false},'usuario no encontrado')
		}
	    const isMatch = await bcrypt.compare(req.body.password,user.password)
	    if (!isMatch) {
			return response.error(req,res,{login:false},'pass invalid')
		}
		req.body.name = user.name
		next()
	}
	catch{
		return response.error(req,res,{login:false}, "error interno del servidor")
	}
}

module.exports = loginValidUser