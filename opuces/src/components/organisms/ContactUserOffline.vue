<template>
  <div class="main-container">
    <!-- <div class="connexion"> -->
      <div class="left">
        <div>
          <router-link :to="{ name: 'Home' }">
            <div class="home-link">
              <Logo class="logo" />
              <h1>Contact</h1>
            </div>
          </router-link>
        </div>

        <form @submit.prevent="sendEmail">
      <select name="subject" v-model="subject">
        <option value="Choisir un sujet">Choisir un sujet</option>
        <option value="Réclamation">Réclamation</option>
        <option value="Question sur le site">Question sur le site</option>
        <option value="Un problème ?">Un problème ?</option>
        <option value="Contacter l'administrateur">
          Contacter l'administrateur
        </option>
      </select>

      <label>Nom</label>
      <input
        name="name"
        v-model="name"
        cols="30"
        rows="5"
        placeholder="Nom"
      >
      
      <label>Email</label>
      <input
        name="email"
        v-model="email"
        placeholder="Email"
      >
      
      <label class="message">Message</label>
      <textarea
        name="message"
        v-model="message"
        cols="30"
        rows="5"
        placeholder="Message"
        
      >
      </textarea>

      <input type="submit" class="--button" value="Envoyer votre demande" />
    </form>
      </div>
    <div class="right">
        <!-- <div class="Desktop"> -->
          <h3>Une demande ? Une question ? Notre équipe est là !</h3>
          <p>Je ne cherche pas à connaître les réponses, je cherche à comprendre les questions.</p>
         
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
import emailjs from "emailjs-com";
import Logo from "../atoms/Logo";
import PictoEye from "../atoms/PictoEye";


export default {
  name: "ContactUserOnline",
  data() {
    return {
      message: "",
      subject: "",
      name: "",
      email: "",
    };
  },
  component: {
Logo,
PictoEye
  },
  methods: {
    sendEmail(e) {
       
      try {
        emailjs.sendForm(
          "service_23ritqp",
          "template_7p13msm",
          e.target,
          "user_S0Gnpuir0FKyLOHzHOp9L",
          {
            name: this.name,
            email: this.email,
            message: this.message,
            subject: this.message,
          }
        );
        console.log("it works!!!");
        this.$router.push({ name:'Home'})
      } catch (error) {
        console.log({ error });
      }
      // Reset form field
      this.subject = "";
      this.message = "";
      this.name = "";
      this.email = "";
    },
    
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/main.scss";
* {
  box-sizing: border-box;
}
h1 {
  color: $main-green;
  transition: all 0.3s;
  font-size:22px;
  font-weight: 800;
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
label {
  float: left;
  padding:2em 0 0 0;
}
input {
  margin:1em 0 0 0;
}
.container {
  display: block;
  margin: auto;
  text-align: center;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 50%;
}
.main-container{
  padding-top: 5rem;
}
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
// h1 {
//   position: absolute;
//   bottom: 10px;
//   font-weight: 900;
//   font-size: 22px;
// }
.message {
  padding-right:5em;
  margin-bottom: 1em;
}
textarea {
  width:100%;
}
select {
    width: 100%;
    border: 0;
    padding-bottom: 1em;
    border-bottom: solid 1px $text-color;
    margin: 5em 0 1em 0;
    font-size: 14px;
    background-color:white;
    cursor: pointer;
  }
.--button {
  border-radius: 19px;
  padding: 1px;
  width: 100%;
  height: 38px;
  color: white;
  border: none;
  margin: 2em 0 2em 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 900px;
  cursor: pointer;
  transition: all .3s;
  background-color:$main-green;
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

label {
  position: relative;
}

input:focus {
  outline: $text-color;
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
