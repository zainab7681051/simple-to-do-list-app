import axios from './axios.js'

export default{
	getAll (){
		return axios().get('list')
	},
	sumbit (list){
		return axios().post('list/create',list)
	},
	update (id,list){
		return axios().put(`list/${id}`,list)
	},
	deleteOne (id){
		return axios().delete(`list/${id}`)
	},
	deleteAll (){
		return axios().delete(`list`)
	},
}