<template>
  <div class="main-container">
    <div class="logoOpuces">
      <router-link :to="{ name: 'Home' }">
        <span id="logo-link"><Logo /></span>
        <h1>O'puces</h1>
      </router-link>
    </div>
    <h1>CreateClassified Form</h1>
    <form @submit="handleSubmit">
      <h6>Titre de votre annonce</h6>
      <label>
        <input v-model="title" name="title" class="title" />
      </label>

      <h6>Description</h6>
      <label>
        <input v-model="description" name="description" class="description" />
      </label>

      <h6>Etat du produit</h6>
      <label>
        <select name="selectState">
          <option value="">Etat du produit</option>
        </select>
      </label>

      <h6>Catégorie</h6>
      <label>
        <select name="selectCategory">
          <option value="">Catégorie</option>
        </select>
      </label>

      <h6>Mode de livraions</h6>
      <label>
        <select name="selectUnderCategory">
          <option value="">Mode de livraison</option>
        </select>
      </label>
      <h6>Images</h6>
      <label>
        <button>Upload Image</button>
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
</template>
<script>
import Logo from "../components/atoms/Logo.vue";
export default {
  name: "CreateClassified",
  components: {
    Logo,
  },
  data() {
    return {
      title: "",
      description: "",
    };
  },
  methods: {
    async handleSubmit(evt) {
      evt.preventDefault();
    },
  },
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
.logoOpuces {
  margin-bottom: 20px;
}
.homeLink {
  margin-top: 20px;
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