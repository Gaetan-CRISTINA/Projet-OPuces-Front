import Vue from 'vue'
import App from './App.vue'
import router from './plugins/router.js'

import './assets/scss/main.scss'
import './assets/scss/reset.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
