const express = require('express')
const router = express.Router()
const controller = require('./controller.js')
const verifyRoles = require('./../../middelwares/verifyRol')


router.get('/',verifyRoles('basic'), async(req,res)=>{ 
	  const category = req.query.category
	  if(category){
        let reesponse = await controller.getPeopleByCategory(category)
        res.send(response)
	  }
	  else{
	  	let response  = await controller.getAllPeople()
        res.send(response)
	  }
	  
      
})
router.get('/:id',async(req,res)=>{ 
	  const id = req.params.id
	  
        let response = await controller.getPersonById(id)
        res.send(response)  

})
router.put('/:id',async(req,res)=>{ 
	  const id = req.params.id
	  
        let response = await controller.updatePersonById(id,req.body)
        res.send(response)  

})
router.delete('/:id',async(req,res)=>{ 
	  const id = req.params.id
	  
        let response = await controller.deletePersonById(id)
        res.send(response)  

})
router.post('/', async (req,res)=>{
	    const name = req.body.name
		const birthDate = req.body.birthDate
		const photo = req.body.photo
		const category = req.body.category
	  try{
	  	 response= await controller.creartePerson(name,birthDate,photo,category)
	  	res.send(respuesta)
	  }catch(e){
	  	console.log(e)
	  	res.send('internal server error')
	  }
		
		
})

module.exports=router