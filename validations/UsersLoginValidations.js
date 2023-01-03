const bcrypt = require('bcrypt')
const modelo = require('./../components/users/model.js')

async function loginValidUser( req , res, next){
	try{
		const {email,password} = req.body
		if(!email){
			return res.send({ logged:false,message:" no enviaste email"})
		}
		if( !/\S+@\S+\.\S+/.test(email)){
			return res.send({ logged:false,message:"no es un email"})
		}
		if(!password){
			return res.send({ logged:false,message:" no enviaste password"})
		}
		const user = await modelo.findOne({email:email})
		if (!user) {
			return res.send({ logged:false,message:'usuario no encontrado'})
		}
	    const isMatch = await bcrypt.compare(req.body.password,user.password)
	    if (!isMatch) {
			return res.send({message:'pass invalid' ,logged:false})
		}
		req.body.name = user.name
		next()
	}
	catch{
		return res.send({message: "error interno del servidor"})
	}
}

module.exports = loginValidUser