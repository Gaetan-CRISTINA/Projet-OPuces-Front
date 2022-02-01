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
          <h2>O'Puces</h2>
        </div>
      </router-link>
    </div>
    <div class="contact">
      <div class="form-contact" v-if="!user">
        <h1>Formulaire de contact</h1>
        <form class="contact-form" @submit.prevent="sendEmail">
          <label for="Name">Nom</label>
          <input type="text" id="fname" name="fname" value="" />
          <label for="Sujet">Sujet</label>
          <input type="text" id="Sujet" name="Sujet" value="" />
          <label for="Mail">Mail</label>
          <input type="email" id="Mail" name="Mail" value="" />
          <label for="Message">Message</label>
          <input type="text" class="Message" name="Message" value="" />
          <div>
            <button class="--button" type="submit">Envoyer le message</button>
          </div>
        </form>
      </div>

      <div class="form-contact" v-if="user">
        <h1>Bonjour {{ user.user_nicename }} votre demande concerne :</h1>

        <form class="contact-form" @submit.prevent="sendEmail">
          <select name="" id="">
            <option value="0">Choisir un sujet</option>
            <option value="1">Réclamation</option>
            <option value="2">Question sur le site</option>
            <option value="3">Un problème ?</option>
            <option value="4">Contacter l'administrateur</option>
          </select>

          <label for="Message">Message</label>
          <input type="text" class="Message" name="Message" value="" />
          
            <button class="--button" value="send" type="submit">Envoyer le message</button>
          
        </form>

      </div>
      <img
        class="illus-computer"
        src="../../assets/svg/illus-computer.svg"
        alt=""
      />
    </div>
  </div>
</template>

<script>
import Logo from "../atoms/Logo.vue";
import emailjs from "@emailjs/browser";
export default {
  name: "Contact",
  components: {
    Logo,
  },
  computed: {
    user() {
      this.$store.state.user;
      return this.$store.state.user;
    },
  },
  methods:{
    sendEmail(){
      emailjs.sendForm(
        'service_oas4sls',
        0,
        this.$refs.form,
        'user_cII9HEbDAx55pYFWR6DJy'
      ).then((result) => {
        console.log('Success', result.text);
      },
      (error) => {
        console.log('Failed', error.text)
      }
      );
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/scss/main";
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
.right {
  display: none;
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
textarea {
  border-radius: 6px;
  background-color: $light-grey;
  border: none;
  padding-top: 0.5em;
  padding-left: 1em;
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
@media screen and (min-width: 576px) {
  form {
    max-width: 400px;
  }
}
@media screen and (min-width: 768px) {
}
@media screen and (min-width: 992px) {
  .infos-mobile {
    display: none;
  }
  .infos-desktop {
    display: block;
  }
  .main-container {
    display: flex;
    height: 100vh;
    align-items: center;
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
@media screen and (min-width: 1200px) {
}
@media screen and (min-width: 1400px) {
}
</style>

