<template>
  <div class="main-container">
    <div class="connexion">
      <div class="left">
        <div>
          <Logo />
          <h1>O'puces</h1>
        </div>
         <form @submit="handleSubmit">
        <h6>Nom</h6>
        <input v-model="username" type="text" name="username" class="username" />
          <div 
            class="error"
            v-if="usernameEmpty"
          >
            Vous devez saisir un nom d'utilisateur
          </div>
          
        <h6>Email</h6>
        <input v-model="email" type="email" name="email" class="email" />
          <div 
            class="error"
            v-if="emailEmpty"
            >
            Vous devez saisir un email
          </div>

        <h6>Mot de passe</h6>
        <label class="eye-label">
          <svg class="icon icon-eye">
            <use xlink:href="#icon-eye"></use>
          </svg>
          <input v-model="password" type="password" name="password" class="password" />
        </label>
          <div 
            class="error"
            v-if="passwordEmpty"
          >
          Vous devez saisir un password
          </div>
          <div 
            class="error"
            v-if="passwordTooShort"
          >
          Le mot de passe doit faire 8 caractères au minimum
          </div>

        <h6>Confirmation du mot de passe</h6>
        <label class="eye-label">
          <svg class="icon icon-eye">
            <use xlink:href="#icon-eye"></use>
          </svg>
          <input v-model="passwordVerify" type="password" name="password" class="password" />
        </label>
        <div 
            class="error"
            v-if="passwordVerifyEmpty"
        >
            Vous devez confirmer le mot de passe
        </div>

        <div 
            class="error"
            v-if="passwordConfirm"
        >
            Les mots de passe ne correspondent pas.
        </div>

        <button href="#" class="button connect">SE CONNECTER</button>
      </form>
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
    
    <div class="right">
      <div class="Desktop">
        <IllusDesk />
        <IllusFLowers />
        <IllusLamp />
      </div>
    </div>
    </div>
  </div>
</template>



<script>
import Logo from "../atoms/Logo";
import IllusFLowers from "../atoms/IllusFLowers";
import IllusDesk from "../atoms/IllusDesk";
import IllusLamp from "../atoms/IllusLamp";

import userService from "../../services/userService.js";

export default {
  name: "PageRegister",
  components: {
    IllusDesk,
    IllusFLowers,
    IllusLamp,
    Logo
  },
  data(){
      return {
          username: '',
          email: '',
          password: '',
          passwordVerify: '',
          usernameEmpty: false,
          emailEmpty: false,
          passwordEmpty: false,
          passwordTooShort: false,
          passwordVerifyEmpty: false,
          passwordConfirm: false

      };
  },
  methods: {
      async handleSubmit(event){
          event.preventDefault();
          
          if(this.username == ""){
              this.usernameEmpty = true;
          }

          if(this.email == ""){
              this.emailEmpty = true;
          }

          if(this.password == ""){
              this.passwordEmpty = true;
          }

          if(this.passwordVerify == ""){
              this.passwordVerifyEmpty = true;
          }

          if(this.password.length < 8){
              this.passwordTooShort = true;
          }

          if(this.password !== this.passwordVerify){
              this.passwordConfirm= true;
          }

          //si OK
          if( 
              !this.usernameEmpty && 
              !this.emailEmpty && 
              !this.passwordEmpty && 
              !this.passwordVerifyEmpty && 
              !this.passwordTooShort && 
              !this.passwordConfirm 
          ) 
          {
              console.log('Appel de l\'API pour s\'inscrire');
              let result = await userService.inscription(
                  this.username,
                  this.email,
                  this.password,
                  this.passwordVerify
              );
              // si tout s'est bien passé je redirige vers la page login
              console.log(result);
              if(result){
                  if(result.success == true){
                      this.$router.push({name:'LoginForm'});
                  }
              }
          }
      }
  }
};
</script>

<style lang="scss">
@import "../../assets/scss/main.scss";

.connexion {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin: auto;
  border: 15px;
}
.main-container h6 {
  align-self: flex-start;
  margin: 8px;
}
.left div:first-child {
  position: relative;
  color: $main-green;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.left {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width:100%;
}
h1 {
  position: absolute;
  bottom: 10px;
  font-weight: 900;
  font-size: 22px;
}
.button {
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
.button svg {
  position: relative;
  top: 6.5px;
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
label {
  position: relative;
}
label > .icon {
  position: absolute;
  top: 70%;
  left: 85%;
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
  .main-container {
    width: 720px;
  }
}
@media screen and (min-width: 992px) {
  .main-container {
    width: 960px;
  }
}
@media screen and (min-width: 1200px) {
  .main-container {
    width: 1140px;
  }
  .connexion {
    display: flex;
    align-items: center;
    height: 100vh;
  }
  .right {
    display: block;
    margin: auto;
  }
  .Desktop img {
    height: 417px;
    width: 417px;
  }
}
@media screen and (min-width: 1400px) {
  .main-container {
    width: 1320px;
  }
}
</style>