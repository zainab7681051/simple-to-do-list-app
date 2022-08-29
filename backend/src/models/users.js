module.exports=(sequelize, Datatypes) =>{
const User=sequelize.define('user',{
	email:{
		type: Datatypes.STRING,
		unique: true,
		
	},
	password:{
		type: Datatypes.STRING
	}
		
})

return User
}
