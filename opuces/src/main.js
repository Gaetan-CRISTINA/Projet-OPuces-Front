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


//-------------KONAMI

import sound from './assets/mp3/weshalors.mp3'
const keyPressed = [];
const secretCode = 'weshalors';

window.addEventListener('keyup', konami);
document.querySelector('.konami-container').style.display = 'none';
function konami(e) {
  e.preventDefault();
  const music = new Audio(sound);
  keyPressed.push(e.key);
  keyPressed.splice(-secretCode.length - 1, keyPressed.length - secretCode.length );
  if(keyPressed.join('').includes(secretCode)) {
    document.querySelector('.home-page').style.display = 'none';
    document.querySelector('.konami-container').style.display = 'block';
    music.play();
    music.addEventListener('ended', quitThatShit);
  }
    function quitThatShit(e) {
      e.preventDefault;
      document.querySelector('.home-page').style.display = 'block';
      document.querySelector('.konami-container').style.display = 'none';
    }
  
}

//-------------KONAMI
