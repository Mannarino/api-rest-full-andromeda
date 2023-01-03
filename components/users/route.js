var express = require ('express')
const mongoose = require('mongoose')
const modelo = require('./model.js')
var controller = require('./controller')
var router = express.Router()
const validationsRegis = require('./../../validations/UsersRegistValidations.js')
const validationsLogin = require('./../../validations/UsersLoginValidations.js')

router.get('/',(req,res)=>{
	modelo.find({})
	.then(data =>res.send(data) )
     
})
router.get('/checkEmailAvailable', async (req,res)=>{
	const email = req.headers.email
	console.log(email)
	const state = await controller.checkEmailAvailable(email)

	res.send(state)
     
})
router.post('/regist',validationsRegis, async (req,res)=>{
	const token = await controller.registUser(req.body.name,
		req.body.email,req.body.password)
	if(token){
		res.json(token)
	}
	
})
router.post('/login',validationsLogin,async (req,res)=>{
	const estadoLogueado = await  controller.loginUser(req)
	res.json(estadoLogueado)
})

router.get('/:id',(req,res)=>{
	
})



router.put('/:id',(req,res)=>{
	
})

router.delete('/:id',(req,res)=>{
	
})


module.exports= router