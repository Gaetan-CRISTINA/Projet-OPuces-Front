<template>
  <div>
    <Header2 />
    <div class="illusLamp">
      <IllusLamp />
    </div>
    <div class="main-container">
      <div class="displayForm">
        <h2 class="CreateClassifiedFormTitle">CRÉER VOTRE ANNONCE</h2>
        <form @submit="handleSubmit">
          <h6>Titre de votre annonce</h6>
          <label>
            <input v-model="title" name="title" class="title" />
          </label>
          <div class="error" v-if="titleEmpty">
            Vous devez saisir un titre pour votre annonce
          </div>


          <h6>Description rapide</h6>
          <label>
            <textarea
              v-model="description"
              name="description"
              class="description"
            />
          </label>
          <div class="error" v-if="descriptionEmpty">
            Vous devez saisir une description rapide
          </div>


          <h6>Contenu de l'annonce</h6>
          <label>
            <textarea v-model="content" name="content" class="content" />
          </label>
          <div class="error" v-if="contentEmpty">
            Le contenu de votre annonce est absent
          </div>
          
          <h6>Votre prix</h6>
          <label class="label-price">
            <input v-model="price" name="price" class="price" />
            <p>€</p>
          </label>
          <div class="error" v-if="priceEmpty">
            Vous devez saisir un prix de vente
          </div>

          <h6>Etat du produit</h6>
          <label>
            <select name="selectState" v-model="selectedState">
              <option value="">Etat du produit</option>
              <option v-for="state in states" :key="state.id" :value="state.id">
                {{ state.name }}
              </option>
            </select>
          </label>
          <div class="error" v-if="stateEmpty">
            Merci de renseigner l'état du produit
          </div>


          <h6>Catégorie</h6>
          <label>
            <select name="selectCategory" v-model="selectedCategory">
              <option value="">Catégorie</option>
              <option
                v-for="category in categories"
                :key="category.id"
                :value="category.id"
              >
                {{ category.name }}
              </option>
            </select>
          </label>
          <div class="error" v-if="categoryEmpty">
            Merci de renseigner la catégorie du produit
          </div>


          <h6>Mode de livraison</h6>
          <label>
            <select name="selectUnderCategory" v-model="selectedDeliveryMethod">
              <option value="">Mode de livraison</option>
              <option
                v-for="deliveryMethod in deliveryMethods"
                :key="deliveryMethod.id"
                :value="deliveryMethod.id"
              >
                {{ deliveryMethod.name }}
              </option>
            </select>
          </label>
          <div class="error" v-if="deliveryEmpty">
            Vous devez saisir un mode de livraison
          </div>


          <h6>L'image de votre annonce</h6>
          <div class="uploadImageForm">
            <label>
              <div>
                <input type="file" @change="uploadImage" />
              </div>
              <div>
                <img class="imageDisplay" v-if="image" :src="image" />
              </div>
              <div>
                <input v-model="imageId" type="hidden" />
              </div>
            </label>
          </div>
          
          <div class="error" v-if="imageEmpty">
            Pour plus de visibilité sur le site, vous devez mettre une image
          </div>


          <div>
            <button class="button-enregistrer">Enregistrer mon annonce</button>
          </div>
        </form>

        <div class="homeLink">
          <router-link
            :to="{
              name: 'Home',
            }"
          >
            <button class="button-retour-home">Retouner vers la page d'accueil</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header2 from "../components/organisms/Header2.vue";
import classifiedsService from "../services/classifiedsService";
import IllusLamp from "../components/atoms/IllusLamp.vue";
export default {
  name: "CreateClassified",
  components: {
    Header2,
    IllusLamp,
  },
  data() {
    return {
      title: "",
      titleEmpty: false,
      description: "",
      descriptionEmpty: false,
      states: [],
      price: "",
      priceEmpty: false,
      selectedState: "",
      stateEmpty: false,
      selectedCategory: "",
      categoryEmpty: false,
      selectedDeliveryMethod: "",
      deliveryEmpty: false,
      content: "",
      contentEmpty: false,
      image: null,
      imageId: null,
      imageEmpty: false,
    };
  },
  async created() {
    this.deliveryMethods = await classifiedsService.loadDeliveryMethods();
    this.categories = await classifiedsService.loadClassifiedProductCategory();
    this.states = await classifiedsService.loadProductState();
  },

  methods: {
    async handleSubmit(event) {
      event.preventDefault();

      if(this.title == ""){
      this.titleEmpty = true;
      }
      if(this.description == ""){
        this.descriptionEmpty = true;
      }
      if(this.selectedState == ""){
        this.stateEmpty = true;
      }
      if(this.selectedCategory ==""){
        this.categoryEmpty = true;
      }
      if(this.price == ""){
        this.priceEmpty = true;
      }
      if(this.selectedDeliveryMethod ==""){
        this.deliveryEmpty = true;
      }
      if(this.content == ""){
        this.contentEmpty = true;
      }
      if(this.imageId == ""){
        this.imageEmpty = true;
      }

      if(
        !this.titleEmpty &&
        !this.descriptionEmpty &&
        !this.stateEmpty &&
        !this.categoryEmpty &&
        !this.priceEmpty &&
        !this.deliveryEmpty &&
        !this.contentEmpty &&
        !this.imageEmpty
      ){
        const result = await classifiedsService.createClassified(
        this.title,
        this.description,
        this.selectedState,
        this.selectedCategory,
        this.price,
        this.selectedDeliveryMethod,
        this.content,
        this.imageId
        );
        if (result) {
        this.$router.push({ name: "Home" });
        return result;
        } else {
        this.createFail = true;
        }

      
      }else{
        console.log('Les champs obligatoires ne sont pas renseignés')
      }
    },
    async uploadImage(event) {
      event.preventDefault();
      const image = event.currentTarget.files[0];
      let imageResult = await classifiedsService.uploadImage(image);
      this.image = imageResult.image.url;
      this.imageId = imageResult.image.id;
    },
  },
  computed: {
    user() {
      this.$store.state.user;
      return this.$store.state.user;
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
.label-price {
  position: relative;
}
.label-price p {
  position: absolute;
  right: 15px;
  bottom: -5px;
}
.imageDisplay {
  width: 300px;
  margin-left: calc(20% - 3rem);
}
.uploadImageForm {
  width: 100%;
}
button {
  height: 38px;
  font-size: 12px;
  font-weight: 700;
  padding: 0.5em 1em;
  border-radius: 22px;
  margin-top: 0.5em;
  transition: all 0.3s;
  cursor: pointer;
  border: none;
}
.button-enregistrer {
  margin-top: 2em;
  background-color: $main-green;
  color:#fff;
  width: 100%;
}
.button-retour-home {
  background-color: #fff;
  color:$main-green;
}
button:hover {
  background-color: $secondary-green;
  color: #fff;
}
.main-container div:first-child {
  position: relative;
  color: $main-green;

  display: flex;
  align-items: center;
  justify-content: flex-start;
}
form {
  width: 100%;
}
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

h6 {
  margin-bottom: 7px;
  margin-top: 20px;
}
.logoOpuces {
  margin: 20px 0 5px 20px;
  width: 70px;
  transition: all 0.2s ease-in-out;
}
.logoOpuces:hover {
  transform: scale(1.1);
}
.homeLink {
  margin-top: 20px;
  align-self: flex-end;
}
h1:hover {
  transition: all 0.3s;
  color: #2093a7;
}
input,
textarea {
  background-color: $light-grey;
  width: 100%;
  padding: 10px;
  height: 38px;
  border-radius: 6px;
  border: none;
  color: black;
}
textarea {
  padding: 10px;
  height: 10em;
}
input:focus {
  outline: $text-color;
}
.uploadImage {
  margin-bottom: 20px;
}
.displayForm {
  display: flex;
  flex-direction: column;
}
.CreateClassifiedFormTitle {
  margin-bottom: 15px;
  margin-top: 3rem;
  align-self: flex-start;
}
.illusLamp {
  display: none;
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
  form {
    width: 960px;
  }
  .CreateClassifiedFormTitle {
    width: 960px;
    margin-left: auto;
    margin-right: auto;
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
</style>