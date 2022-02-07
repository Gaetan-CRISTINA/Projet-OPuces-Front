<template>
  <div>
    <Header2 />
    <div class="illusLamp">
      <IllusLamp />
    </div>
    <div class="main-container">
      


        <div class="left">
          <div class="svg">
          <IllusDesk />
          </div>
          <router-link
            :to="{
              name: 'UpdatePassword',
            }"
          >
            <button class="--button connect">
              Mettre à jour mon mot de passe
            </button>
          </router-link>
        <router-link
            :to="{
              name: 'UpdateEmail',
            }"
          >
            <button class="--button connect">
              Mettre à jour mon adresse mail
            </button>
          </router-link>
          <router-link
            :to="{
              name: 'UpdateUser',
            }"
          >
            <button class="--button connect">
              Mettre à jour mon adresse postale
            </button>
          </router-link>


          <router-link
            :to="{
              name: 'DeleteUser'
            }"
          >
            <button class="delete">
              Supprimer mon compte
            </button>
          </router-link>
        </div>
       
            
        
      
    </div>
  </div>
</template>

<script>
import IllusDesk from "../components/atoms/IllusDesk.vue";
import Header2 from "../components/organisms/Header2.vue";
import IllusLamp from "../components/atoms/IllusLamp.vue";

export default {
  name: "Myaccount",
  components: {
    Header2,
    IllusLamp,
    IllusDesk
  },
  
};
</script>

<style scoped lang="scss">
@import "../assets/scss/main.scss";

.main-container {
  width: 50%;
  display: flex;
  flex-direction: column;
  padding-top: 5rem;
}
.illusLamp {
  display: none;
}
.svg{
  width: 100%;
  align-self: center;
}
.delete:hover {
  background-color: $social-google;
  color: white;
  border: solid 1px $social-google;
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
.infos {
  padding-top: 2em;
  padding-bottom: 2em;
  text-align: center;
  margin: 0 auto;
  max-width: 33em;
}
h2 {
  color: $main-green;
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