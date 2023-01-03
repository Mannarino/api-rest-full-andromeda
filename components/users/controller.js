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
	} 
	catch{
		return res.send({message: "error interno del servidor"})
	}
	
}
usersCtrl.loginUser = async (req)=>{
	try{
		const payload = {
		email: req.body.email
			}
			const token = jwt.sign(payload,config.KEY_SECRET_TOKEN,{expiresIn:'1h'})
			return {token:token, logged:true, message:'usuario logueado', email: req.body.email ,name: req.body.name}
		} 
	catch{
			return res.send({message: "error interno del servidor"})
		}
	}
	
usersCtrl.checkEmailAvailable = async (email)=>{
	try{
		const user = await modelo.findOne({email:email})
		if (user) {
			return {available:false,message:'mail ya en uso'}
		} else {
			return {available:true,message:'mail disponible'}
		}
	}
	catch{
			return res.send({message: "error interno del servidor"})
		}
}
module.exports = usersCtrl