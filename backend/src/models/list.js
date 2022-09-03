module.exports=(sequelize, Datatypes) =>{
const List=sequelize.define('list',{
	toDoText:{
		type: Datatypes.STRING,
		allowNull: false
		
	},
	toDoDate:{
		type: Datatypes.STRING,
	}
		
})


return List
}
