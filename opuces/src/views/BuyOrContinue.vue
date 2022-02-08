<template>
<div>
<Header2 />
  <div class="illusLamp">
      <IllusLamp />
    </div>
    <div class="main-container">
        
        <div class="display-cart">
            <h2>Poursuivre mes achats ou Voir mon panier</h2>

            <div>
             <router-link
                :to="{
                    name: 'Home'}
                    "><button class="--button connect">
               
                     Retour à l'Accueil
                </button></router-link>
                <router-link
                :to="{
                    name: 'Cart'}
                    "><button class="--button connect">
               
                     Voir mon panier
                </button></router-link>
            </div>
        </div>
    </div>
</div> 
</template>

<script>

import Header2 from '../components/organisms/Header2.vue'
import IllusLamp from '../components/atoms/IllusLamp.vue'

export default {
  name: 'BuyOrContinue',
  components: {
    Header2,
    IllusLamp
   
  }
}
</script>

<style scoped lang="scss">
@import "../assets/scss/main";


.display-cart {
    border-radius: 44px;
    -webkit-box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.16);
  -moz-box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.16);
  box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.16);
  margin-top:130px;
  padding: 2rem;
  }

.main-container {
  display: flex;
  justify-content: space-around;
}
button {
  border-radius: 19px;
  padding: 1px;
  width: 345px;
  height: 38px;
  color: white;
  width: 100%;
  border: none;
  margin: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 900px;
  cursor: pointer;
  transition: all .3s;
}
button:hover {
  background-color: $secondary-green;
}
.connect {
  background-color: $main-green;
  margin: 28px 0 38px 0;
}
@media screen and (min-width: 576px) {
  .illusLamp {
    display: none;
  }
}
@media screen and (min-width: 768px) {

 .illusLamp {
    display: none;
  }
}

@media screen and (min-width: 992px) {
  .illusLamp {
    display: none;
  }
  
}
@media screen and (min-width: 1200px) {
  .illusLamp {
    display: none;
  }
}
@media screen and (min-width: 1400px) {
  .illusLamp {
    display: block;
    position: fixed;
    margin-left: 6%;
  }
}
</style>