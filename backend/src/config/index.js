const dotenv = require('dotenv')
dotenv.config()
module.exports = {
	port: process.env.PORT,
	db: {
		database: process.env.DB_NAME,
		user: process.env.DB_USE,
		password: process.env.PASSWORD,
		options: {
			dialect: "postgres",
			host: process.env.HOST,

		}
	},
	authentication: {
		jwtSecret: process.env.JWT_SECRET

	}
}