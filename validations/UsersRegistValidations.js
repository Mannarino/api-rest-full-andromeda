const modelo = require('./../components/users/model.js')
const response = require('./../network/responses.js')

async function registValidUser(req,res,next){
	try{
		const {name,email,password} = req.body
		if(!name){
			return response.error(req,res,{regist:false}," no enviaste name",400)
			// agrego los return para evitar el problema de "can't set headers after they are send to the client"
		}
		if(!email){
			return response.error(req,res,{regist:false}," no enviaste email",400)
		}
		if( !/\S+@\S+\.\S+/.test(email)){
			return response.error(req,res,{regist:false},"no es un email",400)
		}
		if(!password){
			return response.error(req,res,{regist:false}," no enviaste password",400)
		}
		const user = await modelo.findOne({email:email})
		if (user) {
			return response.error(req,res,{regist:false},'mail ya en uso',400)
		}
		next()
		}
	catch{
		return response.error(req,res,{regist:false},"error interno del servidor",400)
	}
}

module.exports = registValidUser