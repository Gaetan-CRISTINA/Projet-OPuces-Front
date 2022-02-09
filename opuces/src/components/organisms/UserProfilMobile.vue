<template>
  <div class="main-container">
    <h2>Tableau de Bord Vendeur</h2>
    <div class="display-cart">
      <h6>Annonces en ligne</h6>
      <span>{{ countUserClassifieds }}</span>

      <h6>Annonces supprimées</h6>
      <span></span>
    </div>

    <router-link
      :to="{
        name: 'Home',
      }"
      ><button class="--button connect">Retour à l'Accueil</button>
    </router-link>
  </div>
</template>



<script>
import storage from "../../plugins/storage";
import classifiedsService from "../../services/classifiedsService";

export default {
  name: "UserPRofilMobile",
  components: {},
  props: {
    countUserClassifieds: Object,
  },
  async created() {
    this.id = storage.get("UserIdLogged");
    this.userClassifieds = await classifiedsService.loadClassifiedsByUser(
      this.id
    );
    console.log(this.userClassifieds);
    this.countUserClassifieds = this.userClassifieds.length;

    
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/main.scss";

.display-cart {
  border-radius: 44px;
  -webkit-box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.16);
  -moz-box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.16);
  box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.16);
  margin-top: 130px;
  padding: 2rem;
}

.main-container {
  display: flex;
  justify-content: space-around;
  padding-top: 5rem;
  flex-direction: column;
}
h2 {
  margin-top: 3rem;
}
form {
  width: 100%;
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
  transition: all 0.3s;
}
button:hover {
  background-color: $secondary-green;
}
h6 {
  padding: 15px 0 15px 0;
}
input {
  width: 100%;
  height: 38px;
  border: none;
  background-color: $light-grey;
  border-radius: 6px;
}
.connect {
  background-color: $main-green;
  margin: 28px 0 38px 0;
}

@media screen and (min-width: 576px) {
}
@media screen and (min-width: 768px) {
  .main-container {
    width: 100%;
  }
}
@media screen and (min-width: 992px) {
  .main-container {
    width: 960px;
  }
}
@media screen and (min-width: 1200px) {
  .main-container {
    width: 1200px;
  }
}
@media screen and (min-width: 1400px) {
}
</style>