<template>
  <div class="main-container">
    <div class="headerLink">
      <router-link
        :to="{
          name: 'Home',
        }"
      >
        <div id="left-header-mobile">
          <span><Logo /></span>
        </div>
      </router-link>
    </div>
    <div class="userDashboard">
      <h6>Tableau de Bord Vendeur</h6>
      <h6>Annonces en ligne</h6>

      <span></span>

      <h6>Annonces en attente</h6>
      <span></span>

      <h6>Messages en attente</h6>
      <span></span>

      <h6>Annonces supprimées</h6>
      <span></span>
    </div>
  </div>
</template>



<script>
import classifiedsService from "../../services/classifiedsService";
import userService from "../../services/userService";

export default {
  name: "UserPRofilMobile",
  components: {},
  props: {
    userProps: Object,
  },
  async created() {
    this.userData = await classifiedsService.loadAuthor();
  },
  data() {
    return {
      userDatas: [],
      username: "",
      email: "",
      newPassword: "",
      newPasswordVerify: "",
      usernameEmpty: false,
      emailEmpty: false,
      newPasswordEmpty: false,
      newPasswordVerifyEmpty: false,
      newPasswordTooShort: false,
      newPasswordConfirm: false,
    };
  },
  methods: {
    async handleSubmit(event) {
      event.preventDefault();

      if (this.username == "") {
        this.usernameEmpty = true;
      }
      if (this.email == "") {
        this.emailEmpty = true;
      }
      if (this.newPassword == "") {
        this.newPasswordEmpty = true;
      }
      if (this.newPasswordVerify == "") {
        this.newPasswordVerifyEmpty = true;
      }
      if (this.newPassword !== this.newPasswordVerify) {
        this.newPasswordConfirm = true;
      }
      if (this.newPassword.length < 8) {
        this.newPasswordTooShort = true;
      }
      if (
        !this.usernameEmpty &&
        !this.emailEmpty &&
        !this.newPasswordEmpty &&
        !this.newPasswordVerifyEmpty &&
        !this.newPasswordTooShort &&
        !this.newPasswordConfirm
      ) {
        console.log("Appel de l'API pour modification");
        let result = await userService.updateUser(
          this.username,
          this.email,
          this.password,
          this.passwordVerify
        );
        console.log(result);
        if (result) {
          if (result.success == true) {
            this.$router.push({ name: "Home" });
          }
        }
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/main.scss";

.connexion {
  width: 50%;
  padding-right: 15px;
  padding-left: 15px;
  margin: auto;
  border: 15px;
  //   border: 2px solid yellow;
}
.main-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  //   border: 2px solid red;
  position: absolute;
}
.userDashboard {
  width: 50%;
  //   border: 2px solid green;
  display: flex;
  flex-direction: column;
  align-self: center;
}
.userDashboard span {
  background-color: $light-grey;
  border-radius: 5px;
  padding: 10px;
  margin: 0px 15px;
  height: 100px;
  width: auto;
  height: 38px;
  border: none;
  border-radius: 6px;
}
.userDashboard h6 {
  align-self: flex-start;
  margin: 8px;
}

.main-container h6 {
  align-self: flex-start;
  margin: 8px;
}

form {
  width: 100%;
}
.--button {
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

input:focus {
  outline: $text-color;
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