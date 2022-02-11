<template>
  <div>
    <Header2 />
    <div class="illusLamp">
      <IllusLamp />
    </div>
    <div class="main-container">
      <div class="display-cart">
        <h3>Récapitulatif de la commande n° {{ classifiedToBuy.id }}</h3>

        <h6>Titre de l'annonce</h6>
        <p>{{ classifiedToBuy.title.rendered }}</p>
        <h6>Description</h6>
        <p v-html="classifiedToBuy.content.rendered"></p>
        <h6>Prix</h6>
        <p>{{ classifiedToBuy.classifiedPrice }} €</p>

        <h6>Mode de livraison</h6>
        <p>{{ classifiedToBuy._embedded["wp:term"][1][0]["name"] }}</p>
      </div>

      <div class="display-user" >
        <h3>Récapitulatif de la Livraison</h3>
        <div v-if="userInfos">
        

        <h6>Nom et prénom</h6>
        <p>{{ userAdress[0].lastname }} {{ userAdress[0].firstname }}</p>
        <h6>Adresse</h6>
        <p>{{ userAdress[0].adress1 }}</p>
        <p>{{ userAdress[0].adress2 }}</p>
        <h6>Code Postal</h6>
        <p>{{ userAdress[0].zipcode }}</p>
        <h6>Ville</h6>
        <p>{{ userAdress[0].city }}</p>
        <h6>Numéro de téléphone</h6>
        <p>0{{ userAdress[0].phone_number }}</p>

        <router-link
          :to="{
            name: 'UpdateUser',
          }"
        >
          <button>Modifier mes informations</button>
        </router-link>
        </div>
        <div v-if="!userInfos">
          <router-link
          :to="{
            name: 'UpdateUser',
          }"
        >
          <button>Renseigner mes informations</button>
        </router-link>
        </div>
      </div>
    </div>
    <div class="align-buttons">
      <form @submit.prevent="sendEmail">
        <label class="hidden">Nom</label>
        <input
          name="lastname"
          v-model="lastname"
          cols="30"
          rows="5"
          placeholder="Nom"
          class="hidden"
        />
        <label class="hidden">prénom</label>
        <input
          name="firstname"
          v-model="firstname"
          cols="30"
          rows="5"
          placeholder="Nom"
          class="hidden"
        />
        <label class="hidden">email</label>
        <input
          name="to_email"
          v-model="to_email"
          cols="30"
          rows="5"
          placeholder="Nom"
          class="hidden"
        />
        <label class="hidden">article</label>
        <input
          name="article"
          v-model="article"
          cols="30"
          rows="5"
          placeholder="Nom"
          class="hidden"
        />
        <label class="hidden">Price</label>
        <input
          name="price"
          v-model="price"
          cols="30"
          rows="5"
          placeholder="Nom"
          class="hidden"
        />
        <label class="hidden">order</label>
        <input
          name="order"
          v-model="order"
          cols="30"
          rows="5"
          placeholder="order"
          class="hidden"
        />
        <label class="hidden">address</label>
        <input
          name="address"
          v-model="address"
          cols="30"
          rows="5"
          placeholder="address"
          class="hidden"
        />
        <label class="hidden">zipcode</label>
        <input
          name="zipcode"
          v-model="zipcode"
          cols="30"
          rows="5"
          placeholder="zipcode"
          class="hidden"
        />
        <label class="hidden">city</label>
        <input
          name="city"
          v-model="city"
          cols="30"
          rows="5"
          placeholder="city"
          class="hidden"
        />

        <button class="pay" v-if="userInfos" >Procéder au paiement</button>
      </form>
      <div class="span">
      <router-link
        :to="{
          name: 'Home',
        }"
      >
        <span class="waitToPay">Je réfléchis, encore !</span>
      </router-link>

      <span class="delete" @click="UnsetStoreClassified">
        Annuler ma commande
      </span>
      </div>
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
        this.updateClassifiedStatus = classifiedsService.updateClassifiedSold(this.classifiedToBuy.id);
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
  computed: {
    userInfos(){
      const userInfos = storage.get("UserInfos");
      if(userInfos ){
        return true;
      } else{
        return false;
      }
    }
  }
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
  justify-content: center;
  flex-direction: column;
  align-items:center;
}
h3 {
  margin-bottom: 15px;
}

form .pay {
  font-size: 12px;
  font-weight: 700;
  color: $main-green;
  padding: 0.5em 1em;
  border-radius: 22px;
  border: solid 1px $main-green;
  background-color: #fff;
  margin: 10px 0;
  transition: all 0.3s;
  cursor: pointer;
}
.hidden {
  display: none;
}
.span span{
  margin-left: 10px;
}
.align-buttons{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
form span {
  margin: 10px;
}
.display-cart {
  border: 1px solid $main-green;
  margin: 8rem 1rem 0;
  padding: 2rem;
}
.display-user {
  border: 1px solid $main-green;
  margin: 2rem 1rem 2rem;
  padding: 2rem;
}
h6 {
  color:$main-green;
}
span,
button {
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
.waitToPay:hover {
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
.span{
  margin-bottom: 40px;
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
  .align-buttons{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
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