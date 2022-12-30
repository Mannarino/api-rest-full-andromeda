var express = require ('express')
const jwt = require('jsonwebtoken')
const config = require('./../config.js')

function verificar (req, res, next){
	try {
		const head = req.headers.authorization
		if(!head){
			res.send({message:'no enviaste autorization'})
		}
		
		const token = head.split(" ")[1]
	    
	    const payload = jwt.verify(token,config.KEY_SECRET_TOKEN)
	    console.log('paso por la autenticacion correctamente')
	    next()
	}
	catch{
		res.send({message:'token con error'})
	}
	
}

module.exports = verificar