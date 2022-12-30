const modelo = require('./model.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('./../../config.js')
const usersCtrl = {}

usersCtrl.registUser = async (name, email, password)=>{
	try{
		const hashedPassword = await bcrypt.hash(password,11)
		const admin = await modelo.create({
			name: name,
	    	email: email,
	    	password : hashedPassword
		})
		const payload = {
			name: name,
			email: email
		}
		const token = jwt.sign(payload,config.KEY_SECRET_TOKEN,{expiresIn:'1h'})
		return {token:token}
	} catch{
		return {message: "error interno del servidor"}
	}
	
}
usersCtrl.loginUser = async (email)=>{
	const payload = {
		email: email
	}
	const token = jwt.sign(payload,config.KEY_SECRET_TOKEN,{expiresIn:'1h'})
	return {token:token, estado:'usuario logueado', email: email}
}
module.exports = usersCtrl