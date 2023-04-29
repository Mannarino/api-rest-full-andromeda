const express = require('express')
const router = express.Router()
const controller = require('./controller.js')
const verifyToken = require('./../../middelwares/verifyTokenValid')
const verifyMembresia = require('./../../middelwares/verifyRol')
const PeopleCreateValidations = require('./../../validations/PeopleCreateValidations')



//enpoint gold se requiere token para obtener esta data
router.get('/', async(req,res)=>{ 
	 console.log('La URL completa es:', req.originalUrl);
	console.log('llego el request a goldddddddddddmiddd')
	  const limit = parseInt(req.query.limit); // Asegúrate de parsear el límite a número
      const skip = parseInt(req.query.skip);// Asegúrate de parsear el salto a número
	  const count = req.query.count 
	  const  category = req.query.category
	  console.log('este es el objeto req.query que llego a la ruta private',req.query)
	  console.log('count en la ruta')
	  console.log(count)
	  const  buscador = req.query.buscador
	  let response = await controller.privatePeopleController(skip,limit,count,category,buscador)
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

router.post('/',verifyToken,PeopleCreateValidations, async (req,res)=>{
	console.log(req.body)
	    const name = req.body.name
		const birthDay = req.body.birthDay
		const passAway = req.body.passAway
		const yearPassAway = req.body.yearPassAway
		const photo = req.body.photo
		const category = req.body.category
		
	  try{
	  	 response= await controller.createPersonController(name,birthDay,passAway,yearPassAway,photo,category)
	  	 return res.send(response)
	  }catch(e){
	  	console.log(e)
	  	return res.status(500).send('internal server error')
	  }		
})
router.get('/:id',verifyToken,async(req,res)=>{ 
	  console.log('entro a endpoint gold person, by id')
	  const id = req.params.id
	  
        let response = await controller.getPersonByIdController(id)
        res.send(response)  

})
router.put('/:id',verifyToken,verifyMembresia('gold'),async(req,res)=>{ 
	  const id = req.params.id
	  
        let response = await controller.updatePersonController(id,req.body)
        res.send(response)  

})
router.delete('/:id',verifyToken,verifyMembresia('gold'),async(req,res)=>{ 
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