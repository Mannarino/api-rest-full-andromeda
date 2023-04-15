const express = require('express')
const router = express.Router()
const controller = require('./controller.js')
const verifyToken = require('./../../middelwares/verifyTokenValid')
const verifyMembresia = require('./../../middelwares/verifyRol')
const PeopleCreateValidations = require('./../../validations/PeopleCreateValidations')

//endopint free y platino,
// no se requiere token ni autorizathion para obtener esta data
router.get('/free-and-platino', async(req,res)=>{ 
	    const limit = parseInt(req.query.limit); // Asegúrate de parsear el límite a número
        const skip = parseInt(req.query.skip);// Asegúrate de parsear el salto a número
	    const countElements = req.query.count 
	   
        let response = await controller.freeAndPlatinoPeopleController(skip,limit,countElements)
        res.send(response)
	     
})

//enpoint gold se requiere token para obtener esta data
router.get('/gold', verifyToken, async(req,res)=>{ 
	console.log('llego el request a gold')
	  const limit = parseInt(req.query.limit); // Asegúrate de parsear el límite a número
      const skip = parseInt(req.query.skip);// Asegúrate de parsear el salto a número
	  const countElements = req.query.count 
	  
	  let response = await controller.goldPeopleController(skip,limit,countElements)
      res.send(response)  	
    
})
//enpoint all se requiere token para obtener esta data
/*router.get('/all',verifyToken, async(req,res)=>{ 
	  const limit = parseInt(req.query.limit); // Asegúrate de parsear el límite a número
      const skip = parseInt(req.query.skip);// Asegúrate de parsear el salto a número
	  const countElements = req.query.count 
	  const all = req.query.all
	  const gold = req.query.membresia
	  
	  let response = await controller.goldPeopleController(skip,limit,membresia,countElements,all,gold)
      res.send(response)  	
    
}) */
router.post('/free-and-platino',PeopleCreateValidations, async (req,res)=>{
	console.log(req.body)
	    const name = req.body.name
		const birthDay = req.body.birthDay
		const passAway = req.body.passAway
		const yearPassAway = req.body.yearPassAway
		const photo = req.body.photo
		const category = req.body.category
		const viewAllowed = req.body.viewAllowed
	  try{
	  	 response= await controller.createPersonController(name,birthDay,passAway,yearPassAway,photo,category,viewAllowed)
	  	res.send(response)
	  }catch(e){
	  	console.log(e)
	  	res.status(500).send('internal server error')
	  }		
})
router.post('/gold',verifyToken,PeopleCreateValidations, async (req,res)=>{
	console.log(req.body)
	    const name = req.body.name
		const birthDay = req.body.birthDay
		const passAway = req.body.passAway
		const yearPassAway = req.body.yearPassAway
		const photo = req.body.photo
		const category = req.body.category
		const viewAllowed = req.body.viewAllowed
	  try{
	  	 response= await controller.createPersonController(name,birthDay,passAway,yearPassAway,photo,category,viewAllowed)
	  	 return res.send(response)
	  }catch(e){
	  	console.log(e)
	  	return res.status(500).send('internal server error')
	  }		
})
router.get('/gold/:id',verifyToken,async(req,res)=>{ 
	  console.log('entro a endpoint gold person, by id')
	  const id = req.params.id
	  
        let response = await controller.getPersonByIdController(id)
        res.send(response)  

})
router.put('/gold/:id',verifyToken,verifyMembresia('gold'),async(req,res)=>{ 
	  const id = req.params.id
	  
        let response = await controller.updatePersonController(id,req.body)
        res.send(response)  

})
router.delete('/gold/:id',verifyToken,verifyMembresia('gold'),async(req,res)=>{ 
	  const id = req.params.id
	  
        let response = await controller.deletePersonByIdController(id)
        res.send(response)  

})
/*router.get('/', async(req,res)=>{ 
	  const limit = parseInt(req.query.limit); // Asegúrate de parsear el límite a número
      const skip = parseInt(req.query.skip);// Asegúrate de parsear el salto a número
	  const category = req.query.category
	  console.log(req.query)
        let response = await controller.getPeopleController(skip,limit,category)
        res.send(response)
	     
}) */

/*router.get('/:id',async(req,res)=>{ 
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

})  */


module.exports=router