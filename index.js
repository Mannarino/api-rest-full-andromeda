
const express = require('express')
const app = express()
const routes = require('./network/routers.js')
const DBconection = require('./db.js')
const cors = require('cors')


app.use(express.json());
app.use(cors());
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