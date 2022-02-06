<template>
  <div>
    <Header2 />
    <div class="illusLamp">
      <IllusLamp />
      <div class="main-container">
        <h1>Votre compte à été supprimé,
        </h1>
        <p>nous sommes désolés de vous voir partir,
            A très bientôt!
            L'équipe O'Puces.
        </p>
      </div>
      
          <router-link
            :to="{
              name: 'Home',
            }"
          >
            <button>
              Retour l'accueil
            </button>
          </router-link>
    </div>
    
  </div>
</template>

<script>
import Header2 from "../components/organisms/Header2.vue";
import IllusLamp from "../components/atoms/IllusLamp.vue";
import storage from "../plugins/storage"

export default {
  name: "DeleteUserConfirmation",
  components: {
    Header2,
    IllusLamp,
  },
  created(){
      //TODO Pour le moment, logout, fonction deleteUser à faire
      storage.unset('userData');
      storage.unset('ClassifiedIdCart')
      storage.unset('UserIdLogged') 
  }
};
</script>

<style scoped lang="scss">
@import "../assets/scss/main";

button {
  margin-top: 2em;
  background-color: $main-green;
  border-radius: 19px;
  padding: 1px;
  height: 38px;
  color: white;
  width: 100%;
  border: none;
  font-size: 14px;
  font-weight: 900px;
  cursor: pointer;
  transition: all 0.3s;
}
button:hover {
  background-color: $secondary-green;
}
.delete:hover {
  background-color: $social-google;
  color: white;
  border: solid 1px $social-google;
}

.illusLamp {
  display: none;
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
    display: inline-block;
    position: fixed;
    margin-left: 6%;
  }
}
</style>
