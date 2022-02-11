<template>
  <div>
    <Header2 />
    <div class="illusLamp">
      <IllusLamp />
    </div>
    <div class="main-container">
      <div class="deleteUser">
        <h1>Votre compte à été supprimé</h1>
        <p>
          nous sommes désolés de vous voir partir, A très bientôt! L'équipe
          O'Puces.
        </p>
        <div class="buttonValidation">
          <router-link
            :to="{
              name: 'Home',
            }"
          >
            <button>Retour l'accueil</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header2 from "../components/organisms/Header2.vue";
import IllusLamp from "../components/atoms/IllusLamp.vue";
import storage from "../plugins/storage";

export default {
  name: "DeleteUserConfirmation",
  components: {
    Header2,
    IllusLamp,
  },
  created() {
    
    storage.unset("userData");
    storage.unset("ClassifiedIdCart");
    storage.unset("UserIdLogged");
  },
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
  width: 400px;
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
.main-container {
  display: flex;
  flex-direction: column;
  padding-top: 7rem;
}
.deleteUser {
  border-radius: 44px;
  -webkit-box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.16);
  -moz-box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.16);
  box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.16);
  margin: 8rem 1rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
}
.buttonValidation {
  display: flex;
  flex-direction: column;
  align-items: center;
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
