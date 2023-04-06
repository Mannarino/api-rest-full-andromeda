var express = require ('express')
const jwt = require('jsonwebtoken')
const config = require('./../config.js')

//solo verifica que sea un token valido
function verificarTokenValido (req, res, next){
	try {
		const head = req.headers.authorization || req.headers.Authorization
		if(!head){
			res.send({message:'no enviaste autorization'})
		}
		const token = head.split(" ")[1]
	    const payload = jwt.verify(token,config.KEY_SECRET_TOKEN)

	    req.rol = payload.rol
	    console.log("el rol de este urusario es "+req.rol)
	    console.log('token valido de autenticacion')
	    next()
	}
	catch{
		res.send({message:'token con error'})
	}
	
}

module.exports = verificarTokenValido