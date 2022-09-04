import axios from './axios.js'

export default{
	getAll (){
		return axios().get('list')
	},
	sumbit (list){
		return axios().post('list/create',list)
	},
	update (list){
		return axios().put(`list/${list.id}`)
	},
	deleteOne (list){
		return axios().post(`list/${list.id}`)
	},
	deleteAll (){
		return axios().post(`list`)
	},
}