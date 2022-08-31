const express= require("express")
const cors=require("cors")
const morgan= require("morgan")
const bodyparser= require ("body-parser")
const {sequelize}=require('./models')
const config=require('./config')

const app=express();
let corsOption={
	origin: "http://localhost:8080"
}

app.use(cors())
app.use(morgan("combined"))
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

require('./routes.js')(app);

sequelize.sync({ force: true })
.then(() => {
  console.log(`resync`)
  app.listen(config.port)
  console.log(`server running on http://localhost:${config.port}`)
  
});