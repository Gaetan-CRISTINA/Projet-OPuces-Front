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
import UserProfilEdit from '../views/UserProfilEdit.vue'
import UpdatePassword from '../views/UpdatePassword.vue'
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
    path: '/error-404',
    name: 'ErrorPage',
    component: ErrorPages
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
    path: '/profil-edit',
    name: 'UserProfilEdit',
    component: UserProfilEdit
  },
  {
    path: '/password-edit',
    name: 'UpdatePassword',
    component: UpdatePassword
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