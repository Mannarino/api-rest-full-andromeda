const routerPeople = require('./../components/people/route.js')
const routerPeoplePrivate = require('./../components/people-private/route.js')
const routerUsers = require('./../components/users/route.js')
const VerifyToken= require('./../middelwares/verifyTokenValid.js')
function routes(app) {
	app.use('/people', routerPeople)
	app.use('/people-private', routerPeoplePrivate)
    app.use('/users', routerUsers)
}

module.exports = routes