<template>
  <div class="container">
    

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
      
      <label>Message</label>
      <textarea
        name="message"
        v-model="message"
        cols="30"
        rows="5"
        placeholder="Message"
      >
      </textarea>

      <input type="submit" value="Send" />
    </form>
  </div>
</template>

<script>
import emailjs from "emailjs-com";

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
  
  methods: {
    sendEmail(e) {
       
      try {
        emailjs.sendForm(
          "service_23ritqp",
          "template_t6hafqo",
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
      } catch (error) {
        console.log({ error });
      }
      // Reset form field
      this.subject = "";
      this.message = "";
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
label {
  float: left;
}
input[type="text"],
[type="email"],
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}
input[type="submit"] {
  background-color: #4caf50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
input[type="submit"]:hover {
  background-color: #b8c7b9;
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
</style>
