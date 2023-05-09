var express = require ('express')
const mongoose = require('mongoose')
const modelo = require('./model.js')
var controller = require('./controller')
var router = express.Router()
const validationsRegis = require('./../../validations/UsersRegistValidations.js')
const validationsLogin = require('./../../validations/UsersLoginValidations.js')
const response = require('./../../network/responses.js')

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
	const responseController = await controller.registUser(req.body.name,req.body.email,req.body.password)
	if(responseController.success){
		response.success(req,res,{regist:true}," user created successfuly",201,responseController.data)
	}else{
		response.error(req,res,{regist:false}," internal error server")
	}
	
})
router.post('/login',validationsLogin,async (req,res)=>{
	const responseController = await  controller.loginUser(req)
	if(responseController.success){
		response.success(req,res,{login:true}," user loged successfuly",201,responseController.data)
	}else{
		response.error(req,res,{login:false}," internal error server")
	}
})

router.get('/:id',(req,res)=>{
	
})



router.put('/:id',async (req,res)=>{
	const _id = req.params.id;
	const name = req.body.name
	const email = req.body.email
	const rol = req.body.rol
    const userUpdated = await  controller.updateUser(_id,name, email, rol)
	res.json(userUpdated)
})

router.delete('/:id',(req,res)=>{
	
})


module.exports= router