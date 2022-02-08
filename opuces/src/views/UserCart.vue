<template>
  <div>
    <Header2 />
    <div class="illusLamp">
      <IllusLamp />
    </div>
    <div class="main-container">
      <div class="display-cart">
        <h3>Récapitulatif de la commande</h3>

        <h1>Titre de l'annonce</h1>
        <p>{{classifiedToBuy.title.rendered}}</p> 
        <h1>Description</h1>
        <p v-html="classifiedToBuy.content.rendered"></p>
        <h1>Prix</h1>
        <p>{{classifiedToBuy.classifiedPrice}} €</p>
        <h1>Mode de livraison</h1>
        <p>{{classifiedToBuy._embedded['wp:term'][1][0]['name']}}</p>
      </div>

      <div class="display-user">
        <h3>Récapitulatif de la Livraison</h3>

        <h1>Nom et prénom</h1>
        <p>{{userAdress[0].lastname}} {{userAdress[0].firstname}}</p> 
        <h1>Adresse</h1>
        <p>{{userAdress[0].adress1}}</p>
        <p>{{userAdress[0].adress2}}
        <h1>Code Postal</h1>
        <p>{{userAdress[0].zipcode}}</p>
        <h1>Ville</h1>
        <p>{{userAdress[0].city}}</p>
        <h1>Numéro de téléphone</h1>
        <p>0{{userAdress[0].phone_number}}</p>
      </div>
      
    </div>
    <router-link
      :to="{
        name: 'PayementSuccess'
        }"><button class="pay">
      
      Procéder au paiement
      </button></router-link>
      
      <button class="delete" @click="UnsetStoreClassified">
      
      Annuler ma commande
      </button>
      <router-link
      :to="{
        name: 'Home'
        }">
      <button>
        Je réfléchis, encore !
      </button>
      </router-link>
      
  </div>
</template>

<script>
import Header2 from "../components/organisms/Header2.vue";
import classifiedsService from "../services/classifiedsService";
import IllusLamp from "../components/atoms/IllusLamp.vue";
import storage from "../plugins/storage";
import userService from "../services/userService"


export default {
  name: "UserCart",
  components: {
    Header2,
    IllusLamp
  },
  
  async created() {
    this.ClassifiedId = storage.get('ClassifiedIdCart');
    console.log(this.ClassifiedId);

    this.classifiedToBuy = await classifiedsService.loadClassifiedsById(this.ClassifiedId);
    console.log('ClassifiedToBuy Loaded')

    this.id = storage.get('UserIdLogged');
    console.log(this.id);
    this.userAdress = await userService.loadUserFromUserTable(this.id);
    console.log(this.userAdress);
    console.log('User Information Loaded');

    this.userData = storage.get('userData');
    this.userEmail = this.userData.user_email;
    console.log(this.userEmail);
  },
  props: {
    classifiedToBuy: Object,
    userAdress: Object
  },
  methods:{
    async UnsetStoreClassified(event){
      event.preventDefault();
      storage.unset("ClassifiedIdCart")
      this.$router.push({ name: "CancelOrder" });
    }
  }
};
</script>


<style scoped lang="scss">
@import "../assets/scss/main";
.display-cart, .display-user {
    border-radius: 44px;
    -webkit-box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.16);
  -moz-box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.16);
  box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.16);
  }
.main-container {
  display: flex;
  justify-content: space-around;
}
h3{
  margin-bottom: 15px;
}
.display-user, .display-cart{
  border: 1px solid $main-green;
  margin: 8rem 1rem ;
  padding: 2rem;
}
button {
  font-size: 12px;
  font-weight: 700;
  color: $main-green;
  padding: 0.5em 1em;
  border-radius: 22px;
  border: solid 1px $main-green;
  background-color: #fff;
  margin-top: 0.5em;
  transition: all 0.3s;
  cursor: pointer;
  margin-left: 70%;
  margin-top: 0.5rem;
}

button:hover {
  background-color: $main-green;
  color: #fff;
  border: solid 1px $main-green;
}
.delete:hover {
  background-color: $social-google;
  color: white;
  border: solid 1px $social-google;
}
.pay:hover{
  background-color: #10BD4C;
  border: solid 1px #10BD4C;
  color: white;
}
@media screen and (min-width: 576px) {
  .illusLamp {
    display: none;
  }
}
@media screen and (min-width: 768px) {
  .display-user, .display-cart {
    text-align: center;
    width: 50%;
    display: block;
  }
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