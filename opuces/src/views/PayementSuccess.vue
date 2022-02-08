<template>
<div>
<Header2 />
  <div class="illusLamp">
      <IllusLamp />
    </div>
    <div class="main-container">
        
        <div class="display-cart">
            <h2>Confirmation de commande</h2>
            <h4>Commande N°{{ClassifiedId}}</h4><br>

            <h2>Bonjour,</h2>
            <h2>Nous vous remercions de votre commande. Nous vous tiendrons informé par e-mail, lorsque l'article de votre commande aura été expédié.</h2><br>

            <h2>Vous allez recevoir un email de confirmation, avec le récapitulatif de votre commande.</h2><br>

            <h2>Nous espérons vous revoir bientôt.</h2>
            <h2>L'équipe O'Puces.</h2>

            <div>
             <router-link
                :to="{
                    name: 'Home'}
                    "><button class="--button connect">
               
                     Retour à l'Accueil
                </button></router-link>
            </div>
        </div>
    </div>
</div> 
</template>

<script>

import Header2 from '../components/organisms/Header2.vue'
import IllusLamp from '../components/atoms/IllusLamp.vue'
import storage from '../plugins/storage'


export default {
  name: 'PayementSuccess',
  components: {
    Header2,
    IllusLamp
   
  },
  async created(){
    // storage.unset("ClassifiedIdCart");
    this.ClassifiedId = storage.get("ClassifiedIdCart");
    console.log(this.ClassifiedId);

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