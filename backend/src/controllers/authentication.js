//register and login
const db=require('../models')
const User=db.user
const jwt=require('jsonwebtoken')
const config =require('../config')
const bcrypt=require('bcrypt')

function jwtSignUser(user){
const ONE_WEEK=60*60*24*7
return jwt.sign(user, config.authentication.jwtSecret,{
	expiresIn: ONE_WEEK
})
}

module.exports={
	
	async register(req,res){
		try{
			  const salt = await bcrypt.genSalt(10);
			  var data = {
			  	email : req.body.email,
			    password : await bcrypt.hash(req.body.password, salt)
			  };

			const user=await User.create(data)
			const userjson=user.toJSON()
			const jwtsu=jwtSignUser(userjson) 
			
			res.send({
				user:userjson,
				token:jwtsu
			})
			console.log({
				user:userjson,
				token:jwtsu
			})
		}catch(error){
			res.status(400).send({
				error:`email is already in use.`
			})
		}
		
	},

	async login (req,res){
		try{
			const {email, password}=req.body;
			const user=await User.findOne({
				where:{
					email:email
				}
			})			

			if(user){
				console.log("user exists")
				const validPassword=await bcrypt.compare(
					password,user.password)
				if(validPassword){
					const userjson=user.toJSON()
					const jwtsu=jwtSignUser(userjson) 
					res.send({
						user:userjson,
						token:jwtsu
					})
					console.log({
						user:userjson,
						token:jwtsu
					})
				}else{

					return res.status(403).send({
						error: 'password is incorrect'
					})
					
				}

			}else{
				return res.status(403).send({
					error:'account does not exist'
				})
			}
		}catch(error){
			res.status(500).send({
				error:`an error has occured :(`
			})
		}
		
	}
}