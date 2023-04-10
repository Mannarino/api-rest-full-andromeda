   function getEnvironment(){
   		try{
   			console.log('entorno local')
             const config = require('./config')
             return config
   		}
   		catch{
<<<<<<< HEAD
   			console.log(' entorno de produccion con las variables de entorno pasadas en produccion')
=======
   			console.log(' entornode produccion con las variables de entorno pasadas en produccion')
>>>>>>> f8503ead333677d2f9d2a4897e5903f1edb1661b
   			 const config = require('./configToDeploy')
             return config
   		}
   }

   module.exports = getEnvironment