<template>
  <div class="main-container">
    <div class="connexion">
      <div class="left">
        <div>
          <Logo />
          <h1>O'puces</h1>
        </div>
      <form @submit="handleSubmit">
          <h6>E-mail</h6>
          <label>
          <input v-model="login" name="login" class="email" />
          </label>

          <div class="error" v-if="loginEmpty">Vous devez saisir un identifiant</div>

        <h6>Mot de passe</h6>
          <label class="eye-label">
           <svg class="icon icon-eye">
              <use xlink:href="#icon-eye"></use>
            </svg>
              <input v-model="password" type="password" name="password" class="password" />
          </label>

          <div class="error" v-if="passwordEmpty">Vous devez saisir un mot de passe</div>

            <div class="error" v-if="loginFailed">Echec de connexion</div>
      
          <a href="#">Mot de passe oublié ?</a>
          <button class="button connect">SE CONNECTER</button>
        </form>

        <button class="button facebook">
          <svg class="icon icon-facebook">
            <use xlink:href="#icon-facebook"></use>
          </svg>
          SE CONNECTER AVEC FACEBOOK
        </button>

        <button class="button google">
          <svg class="icon icon-google">
            <use xlink:href="#icon-google"></use></svg
          >SE CONNECTER AVEC GOOGLE
        </button>

        <div class="new-account">
          <h5>PAS ENCORE INSCRIT ?</h5>
          <button class="button">CREER UN NOUVEAU COMPTE</button>
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
        <svg class="spritesheet">
          <symbol id="icon-facebook" viewBox="0 0 32 32">
            <title>facebook</title>
            <path
              class="a"
              d="M10.147,9.6l.474-3.087H7.659v-2A1.544,1.544,0,0,1,9.4,2.837h1.347V.209A16.423,16.423,0,0,0,8.356,0C5.916,0,4.321,1.479,4.321,4.156V6.509H1.609V9.6H4.321v7.463H7.659V9.6Z"
            ></path>
          </symbol>
        </svg>
        <svg class="spritesheet">
          <symbol id="icon-google" viewBox="0 0 32 32">
            <title>google</title>
            <path
              class="a"
              d="M16.905,9.355a7.978,7.978,0,0,1-8.314,8.39,8.591,8.591,0,1,1,0-17.183,8.262,8.262,0,0,1,5.761,2.248L12.014,5.059C8.955,2.108,3.267,4.325,3.267,9.154a5.382,5.382,0,0,0,5.325,5.425,4.646,4.646,0,0,0,4.878-3.7H8.591V7.921H16.77A7.532,7.532,0,0,1,16.905,9.355Z"
            ></path>
          </symbol>
        </svg>
      </div>

      <div class="right">
        <div class="IllusPlane">
          <IllusPlane />
        </div>
      </div>
    </div>
  </div>
  
</template>



<script>
import Logo from "../atoms/Logo";
import IllusPlane from "../atoms/IllusPlane";

import userService from "../../services/userService.js";
import storage from "../../plugins/storage.js";

export default {
  name: "PageLoginMobile",
  components: {
    Logo,
    IllusPlane,
  },
  data() {
    return {
      login: '',
      password: '',
      loginEmpty: false,
      passwordEmpty: false,
      loginFailed: false,
    }
  },
  methods: {
      async handleSubmit(evt){
          evt.preventDefault();
          // vérifications

          if(this.login == ""){
              this.loginEmpty = true;
          }
          if(this.password == ""){
              this.passwordEmpty = true;
          }
        
          if(!this.passwordEmpty && !this.loginEmpty){
              let userData = await userService.login(
                  this.login, 
                  this.password
              );
              console.log(userData);

            if(userData){
                //console.log("LOGIN!");
                storage.set('userData', userData);
                this.$router.push({name: 'Home'});
                
            } else {
                console.log("LOGIN FAILED !!")
                this.loginFailed = true;
            }
          }
      }
  }
}
</script>

<style lang="scss">
@import "../../assets/scss/main.scss";

  form{
    width: 100%;
  }
  
 .connexion {
      width: 100%;
      padding-right : 15px;
      padding-left:15px;
      margin: auto;
      border:15px;
      
    }
    .main-container h6 {
     align-self: flex-start;
     margin:8px;
    }
    .left div:first-child {
      position:relative;
      color:$main-green;
      margin-top:30px;
      display:flex;
      align-items:center;
      justify-content: center;
    
    }
   .left {
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
   }
    h1 {
      position: absolute;
      bottom:10px;
      font-weight: 900;
      font-size: 22px;
    } 
    .button {
    border-radius: 19px;
    padding: 1px;
    width: 345px;
    height: 38px;
    color:white;
    width:100%;
    border:none;
    margin:17px; 
    display: flex;
    justify-content: center;
    align-items: center;   
    font-size:14px;
    font-weight:900px;
    }
    .button svg {
      position: relative;
      top:6.5px;
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
    a {
    text-decoration: none;
    align-self: flex-start;
    color:$text-color;
    padding:5px;
    }
    .connect {
      background-color:$main-green;
      margin:28px 0 38px 0;
    }
    .facebook{
    background-color:$social-fb;
    }
    .google{
    background-color:$social-google; 
    }
    .new-account{
    margin-top:80px;
    display: flex;
    justify-content: center;
    width:100%;
    flex-wrap: wrap;
    }   
    h5{
    margin:auto;
    }
    .new-account button {
      color:$main-green;
    }
    label {
      position: relative;
    }
    label > .icon {
      position: absolute;
      top: 70%;
      left:95%;
      transform: translateY(-60%);
      color: #484848;
    }
    label > input {
      padding-right: calc(1em + 10px + 8px); /* icon width + icon padding-left + desired separation*/
      height: 38px;
    }
    input:focus {
        outline: $text-color;
    }
    .eye-label {
      display:flex;
      align-items: center;
      width:100%;      
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
  display:none;
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
      display:flex;
      align-items: center;
      height:100vh;
    }
    .right {
      display: block;
      margin:auto;
    }
    .IllusPlane img {
      height:417px;
      width:417px;
    }
    
  }
  @media screen and (min-width: 1400px) {
    .main-container {
      width: 1320px;
    }
  }
</style>