<template>
  <div>
    <Header2 />
    <div class="illusLamp">
      <IllusLamp />
    </div>
    <div class="main-container">
      <div class="display-cart">
        <h3>Récapitulatif de la commande n° {{classifiedToBuy.id}}</h3>

        <h1>Titre de l'annonce</h1>
        <p>{{ classifiedToBuy.title.rendered }}</p>
        <h1>Description</h1>
        <p v-html="classifiedToBuy.content.rendered"></p>
        <h1>Prix</h1>
        <p>{{ classifiedToBuy.classifiedPrice }} €</p>

        <h1>Mode de livraison</h1>
        <p>{{ classifiedToBuy._embedded["wp:term"][1][0]["name"] }}</p>
      </div>

      <div class="display-user">
        
        <h3>Récapitulatif de la Livraison</h3>

        <h1>Nom et prénom</h1>
        <p>{{ userAdress[0].lastname }} {{ userAdress[0].firstname }}</p>
        <h1>Adresse</h1>
        <p>{{ userAdress[0].adress1 }}</p>
        <p>{{ userAdress[0].adress2 }}</p>
        <h1>Code Postal</h1>
        <p>{{ userAdress[0].zipcode }}</p>
        <h1>Ville</h1>
        <p>{{ userAdress[0].city }}</p>
        <h1>Numéro de téléphone</h1>
        <p>0{{ userAdress[0].phone_number }}</p>

        <router-link
:to="{
  name: 'UpdateUser'
}">
        <button>
          Modifier mes informations
          </button>
          </router-link>

      </div>
    </div>
  <div class="align-buttons">
    <form @submit.prevent="sendEmail">
      <label>Nom</label>
      <input
        name="lastname"
        v-model="lastname"
        cols="30"
        rows="5"
        placeholder="Nom"
      />
      <label>prénom</label>
      <input
        name="firstname"
        v-model="firstname"
        cols="30"
        rows="5"
        placeholder="Nom"
      />
      <label>email</label>
      <input
        name="to_email"
        v-model="to_email"
        cols="30"
        rows="5"
        placeholder="Nom"
      />
      <label>article</label>
      <input
        name="article"
        v-model="article"
        cols="30"
        rows="5"
        placeholder="Nom"
      />
      <label>Price</label>
      <input
        name="price"
        v-model="price"
        cols="30"
        rows="5"
        placeholder="Nom"
      />
      <label>order</label>
      <input
        name="order"
        v-model="order"
        cols="30"
        rows="5"
        placeholder="order"
      />
      <label>address</label>
      <input
        name="address"
        v-model="address"
        cols="30"
        rows="5"
        placeholder="address"
      />
      <label>zipcode</label>
      <input
        name="zipcode"
        v-model="zipcode"
        cols="30"
        rows="5"
        placeholder="zipcode"
      />
      <label>city</label>
      <input name="city" v-model="city" cols="30" rows="5" placeholder="city" />

      <button class="pay">Procéder au paiement</button>
      
    
    </form>
<router-link
      :to="{
        name: 'Home',
      }"
    >
      <span>Je réfléchis, encore !</span>
    </router-link><span class="delete" @click="UnsetStoreClassified">
      Annuler ma commande
    </span>
    
    </div>
  
  </div>
</template>

<script>
import Header2 from "../components/organisms/Header2.vue";
import classifiedsService from "../services/classifiedsService";
import IllusLamp from "../components/atoms/IllusLamp.vue";
import storage from "../plugins/storage";
import userService from "../services/userService";
import emailjs from "emailjs-com";

export default {
  name: "UserCart",
  components: {
    Header2,
    IllusLamp,
  },

  async created() {
    this.ClassifiedId = storage.get("ClassifiedIdCart");
    console.log(this.ClassifiedId);

    this.classifiedToBuy = await classifiedsService.loadClassifiedsById(
      this.ClassifiedId
    );
    console.log("ClassifiedToBuy Loaded");

    this.id = storage.get("UserIdLogged");
    console.log(this.id);
    this.userAdress = await userService.loadUserFromUserTable(this.id);
    console.log(this.userAdress);
    console.log("User Information Loaded");

    
    this.userEmail = await userService.loadUserEmail();
    console.log(this.userEmail.data[0].user_email);

    this.lastname = this.userAdress[0].lastname;
    this.firstname = this.userAdress[0].firstname;
    this.to_email = this.userEmail.data[0].user_email;

    this.article = this.classifiedToBuy.title.rendered;
    this.price = this.classifiedToBuy.classifiedPrice;
    this.order = this.classifiedToBuy.id;

    this.address = this.userAdress[0].adress1;
    this.zipcode = this.userAdress[0].zipcode;
    this.city = this.userAdress[0].city;
  },
  props: {
    classifiedToBuy: Object,
    userAdress: Object,
  },
  data() {
    return {
      lastname: "",
      firstname: "",
      to_email: "",
      article: "",
      price: "",
      order: "",
      address: "",
      zipcode: "",
      city: "",
    };
  },
  methods: {
    async UnsetStoreClassified(event) {
      event.preventDefault();
      storage.unset("ClassifiedIdCart");
      this.$router.push({ name: "CancelOrder" });
    },

    sendEmail(e) {
      try {
        emailjs.sendForm(
          "service_23ritqp",
          "template_suw6ljd",
          e.target,
          "user_S0Gnpuir0FKyLOHzHOp9L",
          {
            lastname: this.lastname,
            firstname: this.firstname,
            to_email: this.to_email,

            article: this.article,
            price: this.price,
            order: this.order,

            address: this.address,
            zipcode: this.zipcode,
            city: this.city,
          }
        );
        console.log("it works!!!");
        this.$router.push({ name: "PayementSuccess" });
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
@import "../assets/scss/main";
.display-cart,
.display-user {
  border-radius: 44px;
  -webkit-box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.16);
  -moz-box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.16);
  box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.16);
}
.main-container {
  display: flex;
  justify-content: space-around;
}
h3 {
  margin-bottom: 15px;
}
// form:not(span) {
//   display:none;  
// }
form .pay {
  font-size: 12px;
  font-weight: 700;
  color: $main-green;
  padding: 0.5em 1em;
  border-radius: 22px;
  border: solid 1px $main-green;
  background-color: #fff;
  margin:10px;
  transition: all 0.3s;
  cursor: pointer;
  
}
form span {
 
  margin:10px;
}
.display-user,
.display-cart {
  border: 1px solid $main-green;
  margin: 8rem 1rem;
  padding: 2rem;
}
span, button {
  font-size: 12px;
  font-weight: 700;
  color: $main-green;
  padding: 0.5em 1em;
  border-radius: 22px;
  border: solid 1px $main-green;
  background-color: #fff;
  margin-top: 1.5em;
  transition: all 0.3s;
  cursor: pointer;
}
button:hover {
  background-color: $main-green;
  color: #fff;
  border: solid 1px $main-green;
}
.delete:hover {
  background-color: $social-google;
  color: white;
  border: solid 1px $social-google;
}
.pay:hover {
  background-color: #10bd4c;
  border: solid 1px #10bd4c;
  color: white;
}
@media screen and (min-width: 576px) {
  .illusLamp {
    display: none;
  }
}
@media screen and (min-width: 768px) {
  .display-user,
  .display-cart {
    text-align: center;
    width: 50%;
    display: block;
  }
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
    display: block;
    position: fixed;
    margin-left: 6%;
  }
}
</style>