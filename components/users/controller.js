const modelo = require('./model.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const response = require('./../../network/responses.js')
const obtenerValoresDeEntorno = require('./../../environment/getEnvironment.js')
const config =obtenerValoresDeEntorno()
const usersCtrl = {}

usersCtrl.registUser = async (name, email, password)=>{
	try{
		const hashedPassword = await bcrypt.hash(password,11)
		const user = await modelo.create({
			name: name,
	    	email: email,
	    	password : hashedPassword,
	    	rol:"basic"
		})
		const payload = {
			rol:"basic"
		}
		const token = jwt.sign(payload,config.KEY_SECRET_TOKEN,{expiresIn:'3h'})
		return {success:true,token:token}
	} 
	catch{
		return {success:false,message: "error interno del servidor"}
	}
	
}
usersCtrl.loginUser = async (req)=>{
	try{
		const {email,password} = req.body
		const user = await modelo.findOne({email:email})
		if (!user) {
			return response.error(req,res,{login:false},'usuario no encontrado')
		}
	    const isMatch = await bcrypt.compare(password,user.password)
	    if (!isMatch) {
			return response.error(req,res,{login:false},'pass invalid')
		}
		const payload = {
        		rol: user.rol
			}
		const token = jwt.sign(payload,config.KEY_SECRET_TOKEN,{expiresIn:'3h'})
        const data = {
        	token:token,
        	user:{
        		email: user.email,
        		name: user.name,
        		rol: user.rol
        	}
        }
		return {success:true,data}
		} 
	catch{
			return {success:false,message: "error interno del servidor"}
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
			return {message: "error interno del servidor"}
		}
	}	
usersCtrl.updateUser = async (_id, name, email, rol)=>{
	try{
		const user = await modelo.updateOne({_id:_id}, { $set:{
			name : name,
			email : email,
			rol : rol
		} })
		
			return user
		
	}
	catch{
			return {message: "error interno del servidor"}
		}		
}
module.exports = usersCtrl