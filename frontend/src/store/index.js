import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  strict:true,
  plugins: [
    createPersistedState()
  ],
  state: {
    token:null,
    user:null,
    isUserLoggedIn:false,
    todo:{list:[{}]}//object in array==>object{array:[1:{object},2:{object}]}
  },
  getters: {
  },
  mutations: {
    setToken (state, token){
      state.token=token
      state.isUserLoggedIn = !!(token)
    },
    setUser(state, user){
      state.user=user
    },
    setData(state, data){
      state.todo.list.push(data)
      console.log("todo.list",state.todo.list)

    },
  },
  actions: {
    setToken({commit}, token){
      commit('setToken', token)
    },
    setUser({commit}, user){
      commit('setUser', user)
    },
    setData({commit}, data){
      commit('setData', data)
    },
    

  },
  modules: {
  }
})
