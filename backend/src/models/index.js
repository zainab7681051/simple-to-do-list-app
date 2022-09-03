const SEQUELIZE=require('sequelize')
const config=require('../config')
const users = require("./users.js")
const list = require("./list.js")

const sequelize=new SEQUELIZE(
	config.db.database,
	config.db.user,
	config.db.password,
	config.db.options,
    {
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
    }
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
db.list= (list)(sequelize, SEQUELIZE);
//db.model2 = require("./model2.models.js")(sequelize, SEQUELIZE);

db.user.hasOne(db.list)
db.list.belongsTo(db.user)

module.exports=db