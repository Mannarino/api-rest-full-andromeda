   function getEnvironment(){
   		try{
   			console.log('entorno local')
             const config = require('./config')
             return config
   		}
   		catch{
   			console.log(' entornode produccion con las variables de entorno pasadas en produccion')
   			 const config = require('./configToDeploy')
             return config
   		}
   }

   module.exports = getEnvironment