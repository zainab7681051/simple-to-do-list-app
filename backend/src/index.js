const express= require("express")
const cors=require("cors")
const morgan= require("morgan")
const bodyparser= require ("body-parser")
const {sequelize}=require('./models')
const config=require('./config')

const app=express();
let corsOption={
	origin: "http://localhost:2000"
}

app.use(cors(corsOption))
app.use(morgan("combined"))
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

require('./passport')
require('./routes.js')(app);

sequelize.sync({ force: false })
.then(() => {
  console.log(`resync`)
  app.listen(config.port)
  console.log(`server running on http://localhost:${config.port}`)
  
});