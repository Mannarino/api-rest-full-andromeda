
const express = require('express')
const app = express()
const routes = require('./routers.js')
const DBconection = require('./db.js')
app.use(express.json());
const path = require('path')
//documentacion

//const openapiSpecification = swaggerJsdoc(options);
//const swaggerUi = require('swagger-ui-express');
//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));

//conection base datos
DBconection()

//ruteo
routes(app)


//server escuchando
app.listen(process.env.PORT || 3000,()=>{
	console.log('server listeningg')
})