import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Gui from '../views/Gui.vue'
import LoginForm from '../views/LoginForm.vue'
import CreateUser from '../views/CreateUser.vue'

import ErrorPages from '../views/ErrorPages.vue'
import Logout from '../views/Logout.vue'

import MentionsLegales from '../views/MentionsLegales.vue'
import CGU from '../views/CGU.vue'

import UserProfil from '../views/UserProfil.vue'
import CreateClassified from '../views/CreateClassified.vue'

import UserClassifieds from '../views/UserClassifieds.vue'
import ContactPage from '../views/ContactPage.vue'
import UpdatePassword from '../views/UpdatePassword.vue'

import Myaccount from '../views/Myaccount.vue'
import DeleteClassified from '../views/DeleteClassified.vue'

import Search from '../views/Search.vue'
import About from '../views/About.vue'
import UserCart from '../views/UserCart.vue'
import PayementSuccess from '../views/PayementSuccess.vue'
import CancelOrder from '../views/CancelOrder.vue'
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
  {
    path: '/logout',
    name: 'Logout',
    component: Logout
 },
  {
    path: '/mentions-legales',
    name: 'LegalNotice',
    component: MentionsLegales

  },
  {
    path: '/cgu',
    name: 'CGU',
    component: CGU
  },
  {
    path: '/user-profil',
    name: 'UserProfil',
    component: UserProfil
  },
  
  {
    path: '/create-classified',
    name: 'CreateClassified',
    component: CreateClassified
  },
  {
    path: '/user-classifieds',
    name: 'UserClassifieds',
    component: UserClassifieds

  },
  {
    path: '/contact',
    name: 'ContactPage',
    component: ContactPage
  },
  {
    path: '/password-edit',
    name: 'UpdatePassword',
    component: UpdatePassword
  },
  {
    path: '/user-account',
    name: 'Myaccount',
    component: Myaccount
  },
  {
    path: '/delete-classified',
    name: 'deleteClassified',
    component: DeleteClassified
  },
  {
    path: '/search',
    name: 'searchMobile',
    component: Search
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/cart',
    name: 'Cart',
    component: UserCart
  },
  {
    path: '/payement-success',
    name: 'PayementSuccess',
    component: PayementSuccess
  },
  {
    path: '/order-canceled',
    name: 'CancelOrder',
    component: CancelOrder
  },
  {
    path: '*',
    component: ErrorPages
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router