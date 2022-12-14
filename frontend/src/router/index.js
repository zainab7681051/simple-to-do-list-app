import Vue from 'vue'
import VueRouter from 'vue-router'
import ListView from '../views/ListView.vue'
import RegisterView from '../views/Register.vue'
import LoginView from '../views/Login.vue'
import WelcomeView from '../views/WelcomeView.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'welcome',
		component: WelcomeView
  },
	{
		path: '/list',
		name: 'list',
		component: ListView
  },
	{
		path: '/register',
		name: 'register',
		component: RegisterView
  },
	{
		path: '/login',
		name: 'login',
		component: LoginView
  }
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router