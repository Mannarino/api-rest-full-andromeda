var express = require ('express')
const jwt = require('jsonwebtoken')
const obtenerValoresDeEntorno = require('./../environment/getEnvironment.js')
const config =obtenerValoresDeEntorno()

//solo verifica que sea un token valido
function verificarTokenValido (req, res, next){
	
	try {
		const head = req.headers.authorization || req.headers.Authorization
		if(!head){
			return res.status(401).send({message:'no enviaste autorization'})
		}
		const token = head.split(" ")[1]
	    const payload = jwt.verify(token,config.KEY_SECRET_TOKEN)

	    req.rol = payload.rol
	    console.log("el rol de este urusario es "+req.rol)
	    console.log('token valido de autenticacion')

	   

	    next()
	}
	catch(error){

		 // Si el token ha expirado, maneja la excepción correspondiente
		  if (error.name === 'TokenExpiredError') {
		    console.log('El token ha expirado');
		    return res.status(401).send({message:'El token ha expirado'})
		  } else {
		    console.log('Error al verificar el token:', error.message);
		  }
		console.log('se rechazo el token')
		return res.status(401).send({message:'token con error'})


		//es importante que cuando mando uan respeusta de error
		//agregarle un codigo de estado de error http, ya que las herramientas
		//en el frontend sabran si la respesuta es de error o no en base a esto, si por ejemplo se p
		//si por ejemplo se prodijo un error en la logica de la api y solo mando una respuesta sin indicar
		//indicar un codigo de estado de error, el cliente creara que la operacion
		//salio bien
	}
	
}

module.exports = verificarTokenValido