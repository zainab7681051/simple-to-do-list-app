const db=require('../models')
const List=db.list
const User=db.user
module.exports={
	async create(req,res){
		try {
			const a={
				toDoText:req.body.toDoText,
				toDoDate:req.body.toDoDate,
				userId:req.user.id,
				toDoDone:false

			}
			const list=await List.create(a)

			console.log(list.toJSON())
			res.status(200).send({
				message:'to-do was created successfuly',
				list:list.toJSON()
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
					userId:req.user.id
				},
				order:[
				['createdAt', 'DESC'],
				['updatedAt', 'DESC'],
				]
			})
			if(list[0]){
				console.log(list)
				res.status(200).send({
					list,
					message:'to-do\'s were fetched successfuly'
				})
			}else{
					res.status(200).send({
					message:'No todo\'s in this list'
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
					userId:req.user.id
				}
			})
			console.log(list)
			if(list){
				const old=await List.destroy({
					where:{
					id:id,
					userId:req.user.id
				}
				})
				return res.status(200).send({
					old,
					message:'to-do was deleted successfuly'
				})
			}else{
				 return res.status(400).send({
				error:'No such to-do to delete:('
			})
			}
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
					userId:req.user.id
				}
			})
			if(list[0]){
				list.forEach( async function(element, index) {
				console.log(index,element)
				await element.destroy()
				});
				return res.status(200).send({
					message:'list was deleted successfuly'
				})
			}else{
				 return res.status(400).send({
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
			const {id}=req.params
		   
			const data={
				toDoText:req.body.toDoText,
				toDoDate:req.body.toDoDate,
				userId:req.user.id,
				toDoDone:req.body.toDoDone? false:true
			}
			const list=await List.findOne({
				where:{
					id:id,
					userId:req.user.id
				}
			})
		   if (list) {
		   const newList=await List.update(data,{
				where:{
					id:id,
					userId:req.user.id
				}
			})
		   	console.log(newList)
		   	return res.send(data)
		   }
		   else{
		   	return res.status(400).send({
		   		error: 'cannot update because to-do does not exist'
		   	})
		   }
   
		} catch(e) {
			console.log(e);
			res.status(500).send({
		   		error: 'cannot update list :('
		   	})
		}
	}
}