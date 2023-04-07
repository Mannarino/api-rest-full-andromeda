const mongoose = require('mongoose')
const config = require('./configToDeploy')
module.exports= function db(){
	mongoose.connect(`mongodb+srv://${config.USER_DATABASE}:${config.PASSWORD_DATABASE}@cluster0.wq4xmib.mongodb.net/${config.NAME_DATABASE}?retryWrites=true&w=majority`,
	function(){console.log('conectado a base de datos')})
}
