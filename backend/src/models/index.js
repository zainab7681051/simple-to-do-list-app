const SEQUELIZE=require('sequelize')
const config=require('../config')
const users = require("./users.js")

const sequelize=new SEQUELIZE(
	config.db.database,
	config.db.user,
	config.db.password,
	config.db.options,
)

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const db={}
db.sequelize=sequelize
db.SEQUELIZE=SEQUELIZE
db.user= (users)(sequelize, SEQUELIZE);
//db.model2 = require("./model2.models.js")(sequelize, SEQUELIZE);


module.exports=db