<template>
  <div>
    <Header2 />
    <div class="illusLamp">
      <IllusLamp />
    </div>
    <div class="main-container">
      <div class="deleteUser">
        <h1>Delete User Account Confirmation</h1>
        <p>Voulez vous vraiment supprimer votre compte ?</p>
      <div class="buttonValidation">
        <button class="delete" @click="handleClick">
          Supprimer mon compte, attention cette action est irréversible
        </button>

        <router-link
          :to="{
            name: 'Myaccount',
          }"
        >
          <button>Annuler et revenir sur mon compte</button>
          
        </router-link>
        
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import Header2 from "../components/organisms/Header2.vue";
import IllusLamp from "../components/atoms/IllusLamp.vue";
import userService from "../services/userService";
import storage from "../plugins/storage";

export default {
  name: "DeleteUser",
  components: {
    Header2,
    IllusLamp,
  },
  methods: {
    async handleClick(event) {
      event.preventDefault();
      const userDeletion = await userService.deleteUser();
      console.log(userDeletion);
      if (userDeletion) {
        storage.unset("userData");
        storage.unset("ClassifiedIdCart");
        storage.unset("UserIdLogged");
        this.$router.push({ name: "DeleteUserConfirmation" });
      }
    },
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
  width: 500px;
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
.buttonValidation{
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
