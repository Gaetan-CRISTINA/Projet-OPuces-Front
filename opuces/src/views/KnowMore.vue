<template>
<div>
<Header2 />
  <div class="illusLamp">
      <IllusLamp />
    </div>
    <div class="main-container">
        
        <div class="display-cart">
            <h2>Nous aimerions en savoir plus à propos vous</h2><br>
            <form class="login-form" @submit="handleSubmit">
              <h6>Civilité</h6>
              <select name="sex" v-model="selectedSex">
                <option value="homme">Homme</option>
                <option value="femme">Femme</option>
                <option value="autres">Autres</option>
              </select>  
              


              <h6>Nom</h6>
              <input
                v-model="lastname"
                type="text"
                name="adress1"
                class="adress1"
              />
              <h6>Prénom</h6>
              <input
                v-model="firstname"
                type="text"
                name="adress1"
                class="adress1"
              />


              <h6>Adresse</h6>
              <input
                v-model="adress"
                type="text"
                name="adress1"
                class="adress1"
              />

              <div class="error" v-if="adressEmpty">
                Vous devez saisir un email
              </div>

              <h6>Complément d'adresse</h6>
              <input
                v-model="adress2"
                type="text"
                name="adress2"
                class="adress2"
              />

              <h6>Code Postal</h6>
              <input
                v-model="zipcode"
                type="number"
                name="zipcode"
                class="zipcode"
              />

              <div class="error" v-if="zipcodeEmpty">
                Vous devez saisir un code postal
              </div>

              <h6>Ville</h6>
              <input v-model="city" type="text" name="city" class="city" />

              <div class="error" v-if="cityEmpty">
                Vous devez saisir une ville
              </div>

              <h6>Pays</h6>
              <input
                v-model="country"
                type="text"
                name="country"
                class="country"
              />

              <div class="error" v-if="countryEmpty">
                Vous devez saisir un Pays
              </div>

              <h6>Numéro de téléphone</h6>
              <input
                v-model="phoneNumber"
                type="tel"
                pattern="[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}"
                name="phoneNumber"
                class="phoneNumber"
              />

              <div class="error" v-if="phoneNumberEmpty">
                Vous devez saisir un numéro de téléphone
              </div>

              <button class="--button connect">
                Enregistrer mes informations
              </button>
            </form>




        </div>
    </div>
</div> 
</template>

<script>

import Header2 from '../components/organisms/Header2.vue'
import IllusLamp from '../components/atoms/IllusLamp.vue'
import userService from '../services/userService'
import storage from '../plugins/storage'


export default {
  name: 'KnowMore',
  components: {
    Header2,
    IllusLamp
   
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
      selectedSex : "",
      firstname: "",
      lastname: ""
    };
  },
  methods: {
    async handleSubmit(event) {
      event.preventDefault();
      if (this.zipcode == "") {
        this.zipcodeEmpty = true;
      }
      if (this.city == "") {
        this.cityEmpty = true;
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
        !this.phoneNumberEmpty
      ) {
        console.log("Appel de l'API pour inscription info USER");
        
        let result = await userService.saveUserInformation(
          
          this.adress,
          this.adress2,
          this.country,
          this.phoneNumber,
          this.zipcode,
          this.city
        );
        console.log(result);
        if (result) {
            storage.set("UserInfos", [this.adress, this.adress2, this.country, this.phoneNumber, this.zipcode, this.city])
          this.$router.push({ name: 'Home' });
        }
      }
    },
  },
}
</script>

<style scoped lang="scss">
@import "../assets/scss/main";

select {
  width: 100%;
  border: 0;
  padding-bottom: 1em;
  border-bottom: solid 1px $text-color;
  margin-bottom: 1em;
  font-size: 14px;
  cursor: pointer;
  background-color: white;
}
.display-cart {
    border-radius: 44px;
    -webkit-box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.16);
  -moz-box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.16);
  box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.16);
  margin-top:130px;
  padding: 2rem;
  width: 100%;
  }
h6{
  margin-top: 0.5rem;
}
.main-container {
  display: flex;
  justify-content: space-around;
  width: 40%;
}
button {
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
button:hover {
  background-color: $secondary-green;
}
.connect {
  background-color: $main-green;
  margin: 28px 0 38px 0;
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
input:focus,
select:focus,
textarea:focus {
  outline: none;
}
@media screen and (min-width: 576px) {
  .illusLamp {
    display: none;
  }
  .main-container{
    width: 70%;
  }
  
}
@media screen and (min-width: 768px) {

 .illusLamp {
    display: none;
  }
  .main-container{
    width: 50%;
  }
  
}

@media screen and (min-width: 992px) {
  .illusLamp {
    display: none;
  }
  .main-container{
    width: 50%;
  }
  
}
@media screen and (min-width: 1200px) {
  .illusLamp {
    display: none;
  }
  .main-container{
    width: 50%;
  }
}
@media screen and (min-width: 1400px) {
  .illusLamp {
    display: block;
    position: fixed;
    margin-left: 6%;
  }
  .main-container{
    width: 40%;
  }
}
</style>