const AuethController=require('./controllers/authentication.js')
const isUserAuethController=require('./controllers/isUserAuthenticated.js')
const ValidController=require('./controllers/validations')
const ListController=require('./controllers/listControllers.js')

module.exports=(app)=>{
	app.post('/register',
		ValidController.register,
		AuethController.register)

	app.post('/login',
		ValidController.login,
		AuethController.login)

	app.post('/list/create',
		isUserAuethController,
		ValidController.InList,
		ListController.create)

	app.get('/list',
		isUserAuethController,
		ListController.getAll)

	app.delete('/list/:id',
		isUserAuethController,
		ListController.deleteById)

	app.delete('/list',
		isUserAuethController,
		ListController.deleteAll)

	app.put('/list/:id',
		isUserAuethController,
		ValidController.InList,
		ListController.updateById)
}
