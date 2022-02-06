<template>
  <div>
    <Header2 />
    <div class="illusLamp">
      <IllusLamp />
      <div class="main-container">
        <h1>Delete User Account Confirmation</h1>
        <p>Voulez vous vraiment supprimer votre compte ?</p>
      </div>
      <router-link
        :to="{
          name: 'DeleteUserConfirmation',
        }"
      >
        <button class="delete">
          Supprimer mon compte, attention cette action est irréversible
        </button>
      </router-link>

      <router-link
        :to="{
          name: 'Myaccount',
        }"
      >
        <button>Annuler et revenir sur mon compte</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import Header2 from "../components/organisms/Header2.vue";
import IllusLamp from "../components/atoms/IllusLamp.vue";

export default {
  name: "DeleteUser",
  components: {
    Header2,
    IllusLamp,
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
