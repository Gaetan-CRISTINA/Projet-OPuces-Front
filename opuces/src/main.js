import Vue from 'vue'
import App from './App.vue'
import router from './plugins/router.js'

<<<<<<< HEAD
import './assets/scss/main.scss'
import './assets/scss/reset.css'
=======
import '../src/scss/main.scss'
import '../src/scss/reset.css'
>>>>>>> gui-stephen-2

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
