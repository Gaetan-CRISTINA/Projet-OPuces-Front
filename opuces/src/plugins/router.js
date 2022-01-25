import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Gui from '../views/Gui.vue'
import LoginForm from '../views/LoginForm.vue'
import CreateUser from '../views/CreateUser.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/gui',
    name: 'Gui',
    component: Gui
  },
  {
    path: '/login-form',
    name: 'LoginForm',
    component: LoginForm
  },
  {
    path: '/create-user',
    name: 'PageRegister',
    component: CreateUser
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router