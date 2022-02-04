<template>
  <div class="main-container">
    <div class="connexion">
      <div class="left">
        <router-link
        :to="{
          name: 'Home'
        }">
        <div>
          <h1><Logo /> O'Puces</h1>
        </div>
        </router-link>
        <h2>Connexion</h2>

        <form class="login-form" @submit="handleSubmit">
          <h6>Login</h6>
          <label>
            <input v-model="login" name="login" class="email" />
          </label>

          <div class="error" v-if="loginEmpty">
            Vous devez saisir un identifiant
          </div>

          <h6>Mot de passe</h6>
          <label class="eye-label">
            <svg class="icon icon-eye">
              <use xlink:href="#icon-eye"></use>
            </svg>
            <input
              v-model="password"
              type="password"
              name="password"
              class="password"
            />
          </label>

          <div class="error" v-if="passwordEmpty">
            Vous devez saisir un mot de passe
          </div>

          <div class="error" v-if="loginFailed">Echec de connexion</div>
            <router-link
            :to="{
              name: 'UpdatePassword'}">
          <a href="#">Mot de passe oublié ?</a>
            </router-link>
          <button class="--button connect">SE CONNECTER</button>
        </form>

        <div class="new-account">
          <h5>PAS ENCORE INSCRIT ?</h5>
          <router-link
          :to="{
            name: 'PageRegister'
            }"
          >
          <a class="create-account">CREER UN NOUVEAU COMPTE</a>
          </router-link>
        </div>
        <svg class="spritesheet">
          <symbol id="icon-eye" viewBox="0 0 32 32">
            <title>eye</title>
            <path
              class="a"
              d="M10.215,6.75A9.371,9.371,0,0,0,1.5,12.692a9.363,9.363,0,0,0,17.431,0A9.371,9.371,0,0,0,10.215,6.75Zm0,9.9a3.962,3.962,0,1,1,3.962-3.962A3.963,3.963,0,0,1,10.215,16.654Zm0-6.339a2.377,2.377,0,1,0,2.377,2.377A2.374,2.374,0,0,0,10.215,10.315Z"
            ></path>
          </symbol>
        </svg>
      </div>

      <div class="right">
        <div class="IllusPlane">
          <img src="../../assets/svg/Groupe-277.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import Logo from "../atoms/Logo";

import userService from "../../services/userService.js";
import storage from "../../plugins/storage.js";

export default {
  name: "PageLoginMobile",
  components: {
    Logo,
  },
  data() {
    return {
      login: "",
      password: "",
      loginEmpty: false,
      passwordEmpty: false,
      loginFailed: false,
    };
  },
  methods: {
    async handleSubmit(evt) {
      evt.preventDefault();
      // vérifications

      if (this.login == "") {
        this.loginEmpty = true;
      }
      if (this.password == "") {
        this.passwordEmpty = true;
      }

      if (!this.passwordEmpty && !this.loginEmpty) {
        let userData = await userService.login(this.login, this.password);
        console.log(userData);

        if (userData) {
          console.log("SUCCESS!");
          storage.set("userData", userData);
          this.loginFailed = false;
          this.$router.push({ name: "Home" });
        } else {
          console.log("FAILED !!");
          this.loginFailed = true;
        }
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/main.scss";
.login-form {
  width: 100%;
}
#logo {
  width: auto;
}
.connexion {
  padding-right: 15px;
  padding-left: 15px;
  border: 15px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.main-container h6 {
  align-self: flex-start;
  margin: 8px;
}
.left div:first-child {
  position: relative;
  color: $main-green;
}
.left {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
a {
  text-decoration: none;
  color:$text-color;
}
h1 {
  font-weight: 900;
  font-size: 22px;
  padding: 40px 0 40px 0;
}
.--button {
  display: block;
  width: 100%;
  height: 38px;
  background-color: $main-green;
  border-radius: 20px;
  border: none;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s;
}
.--button:hover {
  background-color: $secondary-green;
}
.new-account {
  margin: 50px;
  display: flex;
  justify-content: center;
  align-items:center;
  
  
}
.new-account a{
  display:flex;
  justify-content: center;
  align-items:center;
  width: 100%;
  height: 38px;
  background-color: $main-green;
  border-radius: 20px;
  border: none;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s;
  text-decoration: none;
}
.create-account{
  display: block;
  width: 100%;
  height: 38px;
  background-color: $main-green;
  border-radius: 20px;
  border: none;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s;
  text-decoration: none;
  padding:1em;
}
h6,
h2 {
  padding: 15px 0 30px 0;
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
label {
  position: relative;
}
label > .icon {
  position: absolute;
  top: 70%;
  right: 0;
  transform: translateY(-60%);
  color: #484848;
}
label > input {
  padding-right: calc(
    1em + 10px + 8px
  ); /* icon width + icon padding-left + desired separation*/
  height: 38px;
}
input:focus {
  outline: $text-color;
}
.eye-label {
  display: flex;
  align-items: center;
  width: 100%;
}
.spritesheet {
  display: none;
}
.icon {
  display: inline-block;
  width: 2em;
  height: 2em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
}
.right {
  display: none;
}
@media screen and (min-width: 576px) {
}

@media screen and (min-width: 768px) {
  .right img {
    width: 70%;
  }
}
@media screen and (min-width: 992px) {
  .right {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .right img {
    width: 100%;
  }
}
@media screen and (min-width: 1200px) {
  .right img {
    width: 100%;
  }
}
@media screen and (min-width: 1400px) {
  .right img {
    width: 150%;
  }
}
</style>