const AuethController=require('./controllers/authentication.js')
const isUserAuethController=require('./controllers/isUserAuthenticated.js')
const ValidController=require('./controllers/validations')
module.exports=(app)=>{
	app.post('/register',
		ValidController.register,
		AuethController.register)

	app.post('/login',
		ValidController.login,
		AuethController.login)
}
