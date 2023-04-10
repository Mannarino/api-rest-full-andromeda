const express = require('express')
const router = express.Router()
const controller = require('./controller.js')
const verifyToken = require('./../../middelwares/verifyTokenValid')
const PeopleCreateValidations = require('./../../validations/PeopleCreateValidations')

//endopint free y platino,
// no se requiere token ni autorizathion para obtener esta data
router.get('/', async(req,res)=>{ 
	    const limit = parseInt(req.query.limit); // Asegúrate de parsear el límite a número
        const skip = parseInt(req.query.skip);// Asegúrate de parsear el salto a número
	    //console countElements = req.query.count

	    /*if(countElements){
	    	let response = await controller.getFreeAndPlatinoPeopleController(skip,limit, countElements)
        	res.send(response)
	    }*/

	 
        let response = await controller.getFreeAndPlatinoPeopleController(skip,limit)
        res.send(response)
	     
})

//enpoint gold se requiere token para obtener esta data
router.get('/gold',verifyToken,/*verifyRoles('basic'),*/ async(req,res)=>{ 
	  const limit = parseInt(req.query.limit); // Asegúrate de parsear el límite a número
      const skip = parseInt(req.query.skip);// Asegúrate de parsear el salto a número
	  
	  console.log(req.query)
        let response = await controller.getAllPeopleController(skip,limit)
        res.send(response)

})
router.post('/',PeopleCreateValidations, async (req,res)=>{
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
	  	res.send('internal server error')
	  }		
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