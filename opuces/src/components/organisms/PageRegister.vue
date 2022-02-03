<template>
  <div class="main-container">
    <!-- <div class="connexion"> -->
      <div class="left">
        <div>
          <router-link :to="{ name: 'Home' }">
            <div class="home-link">
              <Logo class="logo" />
              <h1>O'puces</h1>
            </div>
          </router-link>
        </div>

        <form @submit="handleSubmit">
          <h6>Nom</h6>
          <input
            v-model="username"
            type="text"
            name="username"
            class="username"
          />
          <div class="error" v-if="usernameEmpty">
            Vous devez saisir un nom d'utilisateur
          </div>

          <h6>Email</h6>
          <input v-model="email" type="email" name="email" class="email" />
          <div class="error" v-if="emailEmpty">Vous devez saisir un email</div>

          <h6>Mot de passe</h6>
          <label class="eye-label">
            <!-- <svg class="icon icon-eye">
              <use xlink:href="#icon-eye"></use>
            </svg> -->
            <input
              v-model="password"
              type="password"
              name="password"
              class="password"
            />
            <PictoEye
            v-on:displayHidePassword="displayHidePassword"
            />
          </label>
          <div class="error" v-if="passwordEmpty">
            Vous devez saisir un password
          </div>
          <div class="error" v-if="passwordTooShort">
            Le mot de passe doit faire 8 caractères au minimum
          </div>

          <h6>Confirmation du mot de passe</h6>
          <label class="eye-label">
            <svg class="icon icon-eye">
              <use xlink:href="#icon-eye"></use>
            </svg>
            <input
              v-model="passwordVerify"
              type="password"
              name="password"
              class="password"
            />
            <PictoEye
            v-on:displayHidePassword="displayHidePassword"
            />
          </label>
          <div class="error" v-if="passwordVerifyEmpty">
            Vous devez confirmer le mot de passe
          </div>

          <div class="error" v-if="passwordConfirm">
            Les mots de passe ne correspondent pas.
          </div>

          <button href="#" class="--button connect">S'INSCRIRE</button>
        </form>
      </div>

      <!-- <svg class="spritesheet">
        <symbol id="icon-eye" viewBox="0 0 32 32">
          <title>eye</title>
          <path
            class="a"
            d="M10.215,6.75A9.371,9.371,0,0,0,1.5,12.692a9.363,9.363,0,0,0,17.431,0A9.371,9.371,0,0,0,10.215,6.75Zm0,9.9a3.962,3.962,0,1,1,3.962-3.962A3.963,3.963,0,0,1,10.215,16.654Zm0-6.339a2.377,2.377,0,1,0,2.377,2.377A2.374,2.374,0,0,0,10.215,10.315Z"
          ></path>
        </symbol>
      </svg> -->

      <div class="right">
        <!-- <div class="Desktop"> -->
          <h3>Bienvenue sur O'puces !</h3>
          <p>Veuillez créer votre compte pour publier vos annonces, contacter les vendeurs et faire des affaires !</p>
          <img
            class="illus-computer"
            src="../../assets/svg/illus-computer.svg"
            alt=""
          />
        <!-- </div> -->
      </div>
    <!-- </div> -->
  </div>
</template>



<script>
import Logo from "../atoms/Logo";
import PictoEye from "../atoms/PictoEye";
import userService from "../../services/userService.js";
export default {
  name: "PageRegister",
  components: {
    Logo,
    PictoEye,
  },
  data() {
    return {
      username: "",
      email: "",
      password: "",
      passwordVerify: "",
      usernameEmpty: false,
      emailEmpty: false,
      passwordEmpty: false,
      passwordTooShort: false,
      passwordVerifyEmpty: false,
      passwordConfirm: false,
    };
  },
  methods: {

      /**
     * 
     * Méthode pour Afficher / Cacher le mot de passe au click sur PictoEye
     */
    displayHidePassword: function(evt){
      evt.preventDefault();
      let input = evt.currentTarget.closest('label').querySelector('input');
      let attribut = input.getAttribute('type')
        if(attribut == 'password'){
          input.setAttribute('type', 'text');
        } else {
          input.setAttribute('type', 'password');
        }
      },

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
                
                this.$router.push({name:'Login'});
                      // renvoyer vers la home avec token 
                  }
              }
          }
      }
  }
};
</script>
<style lang="scss">
@import "../../assets/scss/main.scss";
h1 {
  color: $main-green;
  transition: all 0.3s;
}
.logo #logo {
  width: 95px;
  margin-bottom: 1em;
}
.home-link:hover h1 {
  color: $secondary-green;
}
.home-link:hover:hover .logo #logo {
  fill: $secondary-green !important;
}
.picto-eye {
  position: absolute;
  right: 15px;
  bottom: 7px;
}
</style>

<style scoped lang="scss">
@import "../../assets/scss/main.scss";
// .connexion {
//   width: 100%;
//   padding-right: 15px;
//   padding-left: 15px;
//   margin: auto;
//   border: 15px;
// }
.left div:first-child {
  position: relative;
  color: $main-green;
  margin-top: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
}
.left {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}
form {
  width: 100%;
  max-width: 400px;
}
h1 {
  position: absolute;
  bottom: 10px;
  font-weight: 900;
  font-size: 22px;
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
  cursor: pointer;
  transition: all .3s;
}
.--button:hover {
  background-color: $secondary-green;
}
.--button svg {
  position: relative;
  top: 6.5px;
}
h6 {
  padding-top: 1.5em;
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
  left: 90%;
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
// .spritesheet {
//   display: none;
// }
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
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .left {
    width: 50%;
  }
  .right {
    text-align: center;
    width: 50%;
    display: block;
  }
  .right h3 {
    color: $main-green;
  }
  .right p {
    width: 33em;
    margin: 0 auto;
    padding-top: 2em;
    padding-bottom: 4em;
  }
  .illus-computer {
    width: 400px;
  }
}
@media screen and (min-width: 992px) {
  .left {
    border-radius: 44px;
    -webkit-box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.16);
  -moz-box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.16);
  box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.16);
  }
  .illus-computer {
    width: 450px;
  }
}
@media screen and (min-width: 1200px) {
  
}
@media screen and (min-width: 1400px) {
  
}
</style>
