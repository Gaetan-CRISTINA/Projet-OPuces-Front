<template>
  <div class="main-container">
    <div class="logoOpuces">
      <router-link :to="{ name: 'Home' }">
        <span id="logo-link"><Logo /></span>
        <h1>O'puces</h1>
      </router-link>
    </div>
    <div class="displayForm">
    <h1 class="CreateClassifiedFormTitle">CreateClassified Form</h1>
    <form @submit="handleSubmit">
      <h6>Titre de votre annonce</h6>
      <label>
        <input v-model="title" name="title" class="title" />
      </label>

      <h6>Description rapide</h6>
      <label>
        <textarea v-model="description" name="description" class="description" />
      </label>

      <h6>Contenu de l'annonce</h6>
      <label>
        <textarea v-model="content" name="content" class="content" />
      </label>

      <h6>Votre prix</h6>
      <label>
        <input v-model="price" name="price" class="price" /> 
      </label>

      <h6>Etat du produit</h6>
      <label>
        <select name="selectState" v-model="selectedState">
          <option value="">Etat du produit</option>
           <option v-for="state in states"
          
          :key="state.id"
          :value="state.id"
          >{{state.name}}</option>
           
        </select>
      </label>

      <h6>Catégorie</h6>
      <label>
        <select name="selectCategory" v-model="selectedCategory">
          <option value="">Catégorie</option>
          <option v-for="category in categories"
          :key="category.id"
          :value="category.id">{{category.name}}</option>
        </select>
      </label>

      <h6>Mode de livraions</h6>
      <label>
        <select name="selectUnderCategory" v-model="selectedDeliveryMethod">
          <option value="">Mode de livraison</option>
          <option v-for="deliveryMethod in deliveryMethods"
          :key="deliveryMethod.id"
          :value="deliveryMethod.id">{{deliveryMethod.name}}</option>
        </select>
      </label>
      <h6>Images</h6>
      <label>
        <button class="uploadImage">Upload Image</button>
      </label>
      <div>
        <button>Enregistrer mon annonce</button>
      </div>
    </form>

    <div class="homeLink">
      <router-link
        :to="{
          name: 'Home',
        }"
      >
        <button>Retouner vers la page d'accueil</button>
      </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import Logo from "../components/atoms/Logo.vue";
import classifiedsService from '../services/classifiedsService';

export default {
  name: "CreateClassified",
  components: {
    Logo,
  },
  data() {
    return {
      title: "",
      description: "",
      states: [],
      price: "",
      selectedState: "",
      selectedCategory: "",
      selectedDeliveryMethod: ""
    };
  },
  async created(){
    this.deliveryMethods = await classifiedsService.loadDeliveryMethods();
    this.categories = await classifiedsService.loadClassifiedProductCategory();
    this.states = await classifiedsService.loadProductState();
    
  },

  methods: {
    async handleSubmit(event){
      event.preventDefault();
      const result = await classifiedsService.saveClassified(
        this.title,
        this.description,
        this.selectedState,
        this.selectedCategory,
        this.price,
        this.selectedDeliveryMethod
      );
      if(result){
        this.$router.push({name: 'Home'});
        return result;
      } else {
        this.createFail = true;
      }
    },
  },
  computed: {
    user(){
      this.$store.state.user;
      return this.$store.state.user;
    }
  }
};
</script>

<style scoped lang="scss">
@import "../assets/scss/main";
.main-container {
  position: relative;
  top: 70px;
}
button {
  font-size: 12px;
  font-weight: 700;
  color: $main-green;
  padding: 0.5em 1em;
  border-radius: 22px;
  border: solid 1px $main-green;
  background-color: #fff;
  margin-top: 0.5em;
  transition: all 0.3s;
  cursor: pointer;
}
button:hover {
  background-color: $main-green;
  color: #fff;
  border: solid 1px $main-green;
}
.main-container div:first-child {
  position: relative;
  color: $main-green;

  display: flex;
  align-items: center;
  justify-content: flex-start;
}
form{
  padding: 20px;
  border: #2093A7 2px solid;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
select {
    width: 200px;
    border: 0;
    padding-bottom: 1em;
    border-bottom: solid 1px $text-color;
    margin-bottom: 1em;
    font-size: 14px;
    cursor: pointer;
    background-color:white;
  }

h6{
  margin-bottom: 15px;
  margin-top: 20px;
}
.logoOpuces {
  margin-bottom: 20px;
}
.homeLink {
  margin-top: 20px;
  align-self: flex-end;

}
h1:hover {
  transition: all .3s;
  color:#2093A7;
}
input, textarea {
  background-color: $light-grey;
  padding: 10px;
  margin: 0px 15px;
  height: 100px;
  width: auto;
  height: 38px;
  border-radius: 6px;
  border: none;
  color: black;
}
textarea{
  padding: 0 15rem 7rem 0;
}
input:focus {
  outline: $text-color;
}
.uploadImage{
  margin-bottom: 20px;
}
.displayForm{
  display: flex;
  flex-direction: column;
}
.CreateClassifiedFormTitle{
  margin-bottom: 15px;
}
@media screen and (min-width: 576px) {
}
@media screen and (min-width: 768px) {
}
@media screen and (min-width: 992px) {
}
@media screen and (min-width: 1200px) {
}
@media screen and (min-width: 1400px) {
}
</style>