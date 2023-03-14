const routerPeople = require('./../components/people/route.js')
const routerUsers = require('./../components/users/route.js')
const VerifyToken= require('./../middelwares/verifyTokenValid.js')
function routes(app) {
	app.use('/people',VerifyToken, routerPeople)
    app.use('/users', routerUsers)
}

module.exports = routes