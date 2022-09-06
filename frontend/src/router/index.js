import Vue from 'vue'
import VueRouter from 'vue-router'
import ListView from '../views/ListView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import RegisterView from '../views/Register.vue'
import LoginView from '../views/Login.vue'
import WelcomeView from '../views/WelcomeView.vue'
import EditProfView from '../views/EditProfView.vue'

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
    path: '/about',
    name: 'about',
    component:AboutView
  },
  {
    path: '/contact',
    name: 'contact',
    component:ContactView
  },
  {
    path: '/register',
    name: 'register',
    component:RegisterView
  },
  {
    path: '/login',
    name: 'login',
    component:LoginView
  },
  {
    path: '/profile',
    name: 'edit-profile',
    component:EditProfView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
