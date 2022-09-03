const db=require('../models')
const List=db.list
const User=db.user
module.exports={
	async create(req,res){
		try {
			const data={
				toDoText:req.body.text,
				toDoDate:req.body.date,
				userId:req.body.userId
			}
			const list=await List.create(data)
			console.log(list.toJSON())
			res.status(200).send({
				message:'to-do was created successfuly',
				list.toJSON()
			})
		} catch(e) {
			console.log(e)
			res.status(400).send({
				error:'cannot create a todo :('
			})
		}
	},

	async getAll(req,res){
		try {
			const list=await List.findAll({
				where:{
					userId:'1'
				}
			})
			lists={}
			if(list[0]){
				list.forEach( async function(element, index) {
				console.log(index,element.toJSON())
				lists=element
				})
				res.status(200).send({
					lists,
					message:'to-do\'s were fetched successfuly'
				})
			}else{
					res.status(400).send({
					error:'No todo\'s in this list'
				})
			}
		} catch(e) {
			console.log(e)
			res.status(400).send({
				error:'cannot find your todo\'s :('
			})
		}
	},

	async deleteById(req,res){
		try {
			const {id}=req.params
			const list=await List.findOne({
				where:{
					id:id,
					userId:'1'
				}
			})
			await list.destroy()
			console.log(list)
			res.send(list)
		} catch(e) {
			console.log(e)
			res.status(400).send({
				error:'cannot delete your todo\ :('
			})
		}
	},

	async deleteAll(req,res){
		try {
			const list=await List.findAll({
				where:{
					userId:'1'
				}
			})
			if(list[0]){
				list.forEach( async function(element, index) {
				console.log(index,element)
				await element.destroy()
				});
				res.status(200).send({
					message:'list was deleted successfuly'
				})
			}else{
				 res.status(400).send({
				error:'No todo\'s to delete:('
			})
			}
		} catch(e) {
			console.log(e)
			res.status(400).send({
				error:'cannot delete your todo\'s :('
			})
		}
	},

	async updateById(req,res){
		try {
			// statements
		} catch(e) {
			// statements
			console.log(e);
		}
	}
}