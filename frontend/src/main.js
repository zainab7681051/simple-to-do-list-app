import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import {
	sync
} from 'vuex-router-sync'

Vue.config.productionTip = true

sync(store, router)

new Vue({
		router,
		store,
		vuetify,
		render: h => h(App)
	})
	.$mount('#app')