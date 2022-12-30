const modelo = require('./../components/users/model.js')

async function registValidUser(req,res,next){
	const {name,email,password} = req.body
	if(!name){
		return res.send({message:" no enviaste name"})
		// agrego los return para evitar el problema de "can't set headers after they are send to the client"
	}
	if(!email){
		return res.send({message:" no enviaste email"})
	}
	if( !/\S+@\S+\.\S+/.test(email)){
		return res.send({message:"no es un email"})
	}
	if(!password){
		return res.send({message:" no enviaste password"})
	}
	const user = await modelo.findOne({email:email})
	if (user) {
		return res.send({message:'mail ya en uso'})
	}
	next()
}

module.exports = registValidUser