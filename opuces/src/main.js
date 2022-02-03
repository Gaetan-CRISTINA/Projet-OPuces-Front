import Vue from 'vue'
import App from './App.vue'
import router from './plugins/router.js'
import store from './plugins/vuex.js'


import './assets/scss/main.scss'
import './assets/scss/reset.css'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


const keyPressed = [];
const secretCode = 'weshalors';

window.addEventListener('keyup', konami);

function konami(e) {
  e.preventDefault();
  keyPressed.push(e.key);
  keyPressed.splice(-secretCode.length - 1, keyPressed.length - secretCode.length );
  if(keyPressed.join('').includes(secretCode)) {
    console.log('wesh');
  }
}