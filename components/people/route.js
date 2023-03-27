const express = require('express')
const router = express.Router()
const controller = require('./controller.js')
const verifyRoles = require('./../../middelwares/verifyRol')


router.get('/',/*verifyRoles('basic'),*/ async(req,res)=>{ 
	  const limit = parseInt(req.query.limit); // Asegúrate de parsear el límite a número
      const skip = parseInt(req.query.skip);// Asegúrate de parsear el salto a número
	  const category = req.query.category
	  
        let response = await controller.getPeopleController(skip,limit,category)
        res.send(response)
	     
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
		const birthDay = req.body.birthDay
		const passAway = req.body.passAway
		const photo = req.body.photo
		const category = req.body.category
		const viewAllowed = req.body.viewAllowed
	  try{
	  	 response= await controller.createPersonController(name,birthDay,passAway,photo,category,viewAllowed)
	  	res.send(response)
	  }catch(e){
	  	console.log(e)
	  	res.send('internal server error')
	  }
		
		
})

module.exports=router