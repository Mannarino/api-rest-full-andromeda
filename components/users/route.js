var express = require ('express')
const mongoose = require('mongoose')
const modelo = require('./model.js')
var controler = require('./controller')
var router = express.Router()
const validationsRegis = require('./../../validations/UsersRegistValidations.js')
const validationsLogin = require('./../../validations/UsersLoginValidations.js')

router.get('/',(req,res)=>{
	modelo.find({})
	.then(data =>res.send(data) )
     
})
router.post('/regist',validationsRegis, async (req,res)=>{
	const token = await controler.registUser(req.body.name,
		req.body.email,req.body.password)
	if(token){
		res.json(token)
	}
	
})
router.post('/login',validationsLogin,async (req,res)=>{
	const estadoLogueado = await  controler.loginUser()
	res.json(estadoLogueado)
})

router.get('/:id',(req,res)=>{
	
})



router.put('/:id',(req,res)=>{
	
})

router.delete('/:id',(req,res)=>{
	
})


module.exports= router