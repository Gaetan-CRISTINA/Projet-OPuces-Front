<template>

<div><Header2 />
<div class="illusLamp">
    <IllusLamp />
    </div>
 <div class="main-container">

    
    <div class="connexion">
      <div class="left">
        <form @submit="handleSubmit">
          <h6>Nom d'utilisateur</h6>
          <input
            v-model="username"
            type="text"
            name="username"
            class="username"
            placeholder=""
          />
          <div class="error" v-if="usernameEmpty">
            Vous devez saisir un nom d'utilisateur
          </div>

          <h6>Email</h6>
          <input v-model="email" type="email" name="email" class="email" />
          <div class="error" v-if="emailEmpty">Vous devez saisir un email</div>

          <h6>Nouveau mot de passe</h6>
          <label class="eye-label">
            <input
              v-model="newPassword"
              type="password"
              name="password"
              class="password"
              placeholder=""
            />
          </label>
          <div class="error" v-if="newPasswordEmpty">
            Vous devez saisir un password
          </div>
          <div class="error" v-if="newPasswordTooShort">
            Le mot de passe doit faire 8 caractères au minimum
          </div>

          <h6>Confirmation du mot de passe</h6>
          <label class="eye-label">
            <input
              v-model="newPasswordVerify"
              type="password"
              name="password"
              class="password"
            />
          </label>
          <div class="error" v-if="newPasswordVerifyEmpty">
            Vous devez saisir un password
          </div>
          <div class="error" v-if="newPasswordConfirm">
            Les mots de passe ne correspondent pas.
          </div>
          <button class="--button connect">
            ENREGISTRER LES MODIFICATIONS
          </button>
        </form>

        </div>

        <div class="right contact">
          <div class="form-contact">
          <form class="login-form" @submit="SecondhandleSubmit">

            <h6>Code Postal</h6>
            <input 
            v-model="zipcode"
            type="number" 
            name="zipcode" 
            class="zipcode" />

            <div class="error" v-if="zipcodeEmpty">
              Vous devez saisir un code postal
            </div>

            <h6>Ville</h6>
            <input 
            v-model="city" 
            type="text" 
            name="city" 
            class="city" />

            <div class="error" v-if="cityEmpty">
              Vous devez saisir une ville
            </div>
            <h6>Adresse</h6>
            <input 
            v-model="adress" 
            type="text" 
            name="adress1" 
            class="adress1" />

            <div class="error" v-if="adressEmpty">
              Vous devez saisir un email
            </div>

            <h6>Complément d'adresse</h6>
            <input 
            v-model="adress2" 
            type="text" 
            name="adress2" 
            class="adress2" />

            <h6>Pays</h6>
            <input 
            v-model="country" 
            type="text" 
            name="country" 
            class="country" />

            <div class="error" v-if="countryEmpty">
              Vous devez saisir un Pays
            </div>

            <h6>Numéro de téléphone</h6>
            <input 
            v-model="phoneNumber" 
            type="number" 
            name="phoneNumber" 
            class="phoneNumber" />

            <div class="error" v-if="phoneNumberEmpty">
              Vous devez saisir un numéro de téléphone
            </div>
            
            <button class="--button connect">
              ENREGISTRER LES MODIFICATIONS
            </button>
          </form>
        </div>
        </div>
      
    </div>
 </div>
</div>

</template>

<script>

import storage from "../plugins/storage";
import userService from "../services/userService";

import Header2 from "../components/organisms/Header2.vue"
import IllusLamp from "../components/atoms/IllusLamp.vue"

export default {
  name: "Myaccount",
  components: {
      Header2,
      IllusLamp
  },
  data() {
    return {
      username: "",
      usernameEmpty: false,
      newPassword: "",
      newPasswordEmpty: false,
      email: "",
      emailEmtpy: false,
      newPasswordVerify: "",
      newPasswordTooShort: false,
      newPasswordVerifyEmpty: false,
      newPasswordConfirm: false,

      zipcode: "",
      zipcodeEmpty: false,
      city: "",
      cityEmpty: false,
      adress:"",
      adressEmpty: false,
      adress2: "",
      country:"",
      countryEmpty: false,
      phoneNumber:"",
      phoneNumberEmpty: false,
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
      if (this.password == "") {
        this.passwordEmpty = true;
      }
      if (this.newPasswordVerify == "") {
        this.newPasswordVerifyEmpty = true;
      }
      if (this.newPassword.length < 8) {
        this.newPasswordTooShort = true;
      }
      if (this.newPassword !== this.newPasswordVerify) {
        this.passwordConfirm = true;
      }

      const userData = storage.get('userData');
      if (userData != null) {
        const token = userData.token;
        if (userService.checkUser(token)) {
          return true;
        } else {
          return false;
        }
      }

      if (
        !this.usernameEmpty &&
        !this.emailEmpty &&
        !this.newPasswordEmpty &&
        !this.newPasswordVerify &&
        !this.newPasswordTooShort &&
        !this.newPasswordConfirm &&
        this.userData == true
      ) {
        console.log("Mise à jour du USER");
        let result = await userService.updateUser(
          this.newPassword,
          this.newPasswordVerify,
          this.username,
          this.email
        );
        console.log(result);
        if(result) {
          if(result == true){
            this.$router.push({ name: "Home" });
          }
        }
      }
    },
    async secondHandleSubmit(event){
      event.preventDefault();
      if (this.zipcode == ""){
        this.zipcodeEmpty = true;
      }
      if (this.city == ""){
        this.cityEmpty = true;
      }
      if (this.city == ""){
        this.cityEmpty = true;
      }
      if (this.adress == ""){
        this.adressEmpty = true;
      }
      if (this.country == ""){
        this.countryEmpty = true;
      }
      if (this.phoneNumber == ""){
        this.phoneNumberEmpty = true;
      }

      if(
        !this.zipcodeEmpty &&
        !this.cityEmpty &&
        !this.adressEmpty &&
        !this.countryEmpty &&
        !this.phoneNumberEmpty
      )
      {
        console.log('Appel de l\'API pour inscription info USER');
        let result = await userService.saveUserInformation(
          //Data à transférer

        );
        console.log(result);
        if(result){
          this.$router.push({name:'Home'});
        }
      }


    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/main.scss";

.headerLink {
  display: flex;
  justify-content: space-between;
  margin: 20px;
}
.connexion {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin: 200px auto;
  border: 15px;

  display: flex;
  justify-content: space-evenly;
  align-items:center;
  //   border: 2px solid yellow;

}
.main-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  margin-top: 7rem;
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
.infos-desktop {
  display: none;
}
.infos-mobile {
  display: block;
}
.infos{
  padding-top: 2em;
  padding-bottom: 2em;
  text-align: center;
  margin: 0 auto;
  max-width: 33em;
}
h2 {
  color: $main-green;
}
.main-container {
  padding-top: 42px;
}
form {
  margin: 0 auto;
  width: 100%;
}
form > * {
  display: block;
  width: 100%;
}

label {
  font-weight: 600;
  padding-top: 1.5em;
}
input {
  height: 38px;
  background-color: $light-grey;
  border: none;
  border-radius: 6px;
  padding-left: 1em;
}
select {
  padding-top: 1.5em;
  border: 0;
  padding-bottom: 1em;
  border-bottom: solid 1px $text-color;
  margin-bottom: 1em;
  font-size: 14px;
  cursor: pointer;
  background-color: white;
}
input:focus,
select:focus,
textarea:focus {
  outline: none;
}

</style>