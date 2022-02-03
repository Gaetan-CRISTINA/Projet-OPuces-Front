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
        <h2>Je suis le titre</h2> 
        <h1>Description</h1>
        <p>Je suis la description</p>
        <h1>Prix</h1>
        <h2>Argent €</h2>
        <h1>Mode de livraison</h1>
        <h2>Pigeon voyageur</h2>
      </div>

      <div class="display-user">
        <h3>Récapitulatif de la Livraison</h3>

        <h1>Nom et prénom</h1>
        <h2>Team Opuces</h2> 
        <h1>Adresse</h1>
        <p>215 rue du soleil levant</p>
        <p>3ème planète après le soleil
        <h1>Code Postal</h1>
        <h2>17 568 12</h2>
        <h1>Ville</h1>
        <h2>Xandar</h2>
        <h1>Numéro de téléphone</h1>
      </div>
      
    </div>
    <router-link
      :to="{
        name: 'PayementSuccess'
        }"><button class="pay">
      
      procéder au paiement
      </button></router-link>
  </div>
</template>

<script>
import Header2 from "../components/organisms/Header2.vue";
import classifiedsService from "../services/classifiedsService";
import IllusLamp from "../components/atoms/IllusLamp.vue";
import storage from "../plugins/storage";

export default {
  name: "UserCart",
  components: {
    Header2,
    IllusLamp,
  },
  async created() {
    const ClassifiedId = storage.get("ClassifiedIdCart");
    console.log(ClassifiedId);
    this.classified = await classifiedsService.loadClassifiedsById(
      ClassifiedId
    );
  },
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