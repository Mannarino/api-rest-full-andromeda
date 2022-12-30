const routerPeople = require('./components/people/route.js')
const routerUsers = require('./components/users/route.js')
const ValidationAuth = require('./validations/AuthorizationValidate.js')
function routes(app) {
	app.use('/people',ValidationAuth, routerPeople)
    app.use('/users', routerUsers)
}

module.exports = routes