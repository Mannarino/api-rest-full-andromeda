   function getEnvironment(){
   		try{
             const config = require('./config')
             if(config){
                console.log('entorno local')
             }
             return config
   		}
   		catch{

   			console.log(' entorno de produccion con las variables de entorno pasadas en produccion')
   			 const config = require('./configToDeploy')
             return config
   		}
   }

   module.exports = getEnvironment