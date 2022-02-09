<template>
  <div>
    <Header2 />
    <div class="illusLamp">
      <IllusLamp />
    </div>

    <div class="main-container">
      
        <div class="left">
          <div class="form-contact">
            <form class="login-form" @submit="handleSubmit">
              <h6>Civilité</h6>
              <select name="civility" v-model="civility">
                <option value="Madame">Madame</option>
                <option value="Monsieur">Monsieur</option>
                <option value="Autres">Autres</option>
              </select>
              <div class="error" v-if="civilityEmpty">
                Merci de choisir une civilité
              </div>

              <h6>Nom</h6>
              <input v-model="lastname" type="text" name="lastname" />

              <div class="error" v-if="lastnameEmpty">
                Merci de saisir votre nom
              </div>

              <h6>Prénom</h6>
              <input v-model="firstname" type="text" name="firstname" />
              <div class="error" v-if="firstnameEmpty">
                Merci de saisir votre prénom
              </div>

              <h6>Adresse</h6>
              <input v-model="adress" type="text" name="adress1" />

              <div class="error" v-if="adressEmpty">
                Vous devez saisir un email
              </div>

              <h6>Complément d'adresse</h6>
              <input v-model="adress2" type="text" name="adress2" />

              <h6>Code Postal</h6>
              <input v-model="zipcode" type="number" name="zipcode" />

              <div class="error" v-if="zipcodeEmpty">
                Vous devez saisir un code postal
              </div>

              <h6>Ville</h6>
              <input v-model="city" type="text" name="city" />

              <div class="error" v-if="cityEmpty">
                Vous devez saisir une ville
              </div>

              <h6>Pays</h6>
              <input v-model="country" type="text" name="country" />

              <div class="error" v-if="countryEmpty">
                Vous devez saisir un Pays
              </div>

              <h6>Numéro de téléphone</h6>
              <input v-model="phoneNumber" type="number" name="phoneNumber" />

              <div class="error" v-if="phoneNumberEmpty">
                Vous devez saisir un numéro de téléphone
              </div>

              <button class="--button">
                Enregistrer les modifications
              </button>
              <router-link
              :to="{
                name: 'Home',
              }"
            >
              <button class="--button">
                Annuler et retourner à l'accueil
              </button>
            </router-link>
            </form>
            
          </div>
        </div>

        <div class="right">
          <img src="../assets/svg/tree.svg" alt="">
        </div>
      
    </div>
  </div>
</template>

<script>

import userService from "../services/userService";
import Header2 from "../components/organisms/Header2.vue";
import IllusLamp from "../components/atoms/IllusLamp.vue";
import storage from "../plugins/storage";

export default {
  name: "UpdateUser",
  components: {
    Header2,
    IllusLamp,
    
  },
  data() {
    return {
      zipcode: "",
      zipcodeEmpty: false,
      city: "",
      cityEmpty: false,
      adress: "",
      adressEmpty: false,
      adress2: "",
      country: "",
      countryEmpty: false,
      phoneNumber: "",
      phoneNumberEmpty: false,
      civility: "",
      civilityEmpty: false,
      firstname: "",
      firstnameEmpty: false,
      lastname: "",
      lastnameEmpty: false,
    };
  },
  methods: {
    async handleSubmit(event) {
      event.preventDefault();
      if (this.zipcode == "") {
        this.zipcodeEmpty = true;
      }
      if (this.civility == "") {
        this.civilityEmpty = true;
      }
      if (this.firstname == "") {
        this.civilityEmpty = true;
      }
      if (this.lastname == "") {
        this.lastnameEmpty = true;
      }
      if (this.city == "") {
        this.cityEmpty = true;
      }
      if (this.adress == "") {
        this.adressEmpty = true;
      }
      if (this.country == "") {
        this.countryEmpty = true;
      }
      if (this.phoneNumber == "") {
        this.phoneNumberEmpty = true;
      }

      if (
        !this.zipcodeEmpty &&
        !this.cityEmpty &&
        !this.adressEmpty &&
        !this.countryEmpty &&
        !this.phoneNumberEmpty &&
        !this.civilityEmpty &&
        !this.lastnameEmpty &&
        !this.firstnameEmpty
      ) {
        console.log("Mise à jour des infos user");

        let result = await userService.saveUserInformation(
          this.adress,
          this.adress2,
          this.country,
          this.phoneNumber,
          this.zipcode,
          this.city,
          this.civility,
          this.firstname,
          this.lastname
        );
        console.log(result);
        if (result) {
          storage.set("UserInfos", [
            this.civility,
            this.firstname,
            this.lastname,
            this.adress,
            this.adress2,
            this.country,
            this.phoneNumber,
            this.zipcode,
            this.city,
          ]);
          
          this.$router.push({ name: "Myaccount" });
        }
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/main.scss";
.main-container {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  form {
  width: 100%;
  max-width: 400px;
}
h6 {
  padding-top: 1.5em;
}
.--button {
  border-radius: 19px;
  padding: 1px;
  width: 100%;
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
.left {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.illusLamp {
  display: none;
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
form {
  margin: 0 auto;
  width: 100%;
}
form > * {
  display: block;
  width: 100%;
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
@media screen and (min-width: 576px) {
  
}
@media screen and (min-width: 768px) {
  .right img {
    width: 400px;
  }
 
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
}
@media screen and (min-width: 992px) {
  
  .left {
    padding-top:20px;
    border-radius: 44px;
    -webkit-box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.16);
  -moz-box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.16);
  box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.16);
  }
}
@media screen and (min-width: 1200px) {
  
}
@media screen and (min-width: 1400px) {
  
}

</style>