<template>
  <div>
    <Header2 />
    <div class="illusLamp">
      <IllusLamp />
    </div>
    <div class="main-container">
      <div class="updateClassifiedForm">
        <h1>Update Classified</h1>
        <p>Voici le formulaire de modification de votre annonce</p>
        <form @submit="handleSubmit"></form>

        <div class="buttonValidation">
          <router-link
            :to="{
              name: 'UserClassifieds',
            }"
          >
            <button>Retour l'accueil</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header2 from "../components/organisms/Header2.vue";
import IllusLamp from "../components/atoms/IllusLamp.vue";
import classifiedsService from "../services/classifiedsService";

export default {
  name: "UpdateClassified",
  components: {
    Header2,
    IllusLamp,
  },
  created() {
    this.id = this.$route.params.id;
  },
  data() {
    return {
      title: "",
      description: "",
      states: [],
      price: "",
      selectedState: "",
      selectedCategory: "",
      selectedDeliveryMethod: "",
      content: "",
      image: null,
      imageId: null,
    };
  },
  methods: {
    // 1. charger l'annonce this.classified = loadClassifiedById(classifiedId);
    // 2. récupérer les infos current
    // 3. tout ça :
    async handSubmit(event) {
      event.preventDefault();

      const updateClassified = await classifiedsService.updateClassified(
        this.title,
        this.description,
        this.selectedState,
        this.selectedCategory,
        this.price,
        this.selectedDeliveryMethod,
        this.content,
        this.imageId
      );
      if (updateClassified) {
        this.$router.push({ name: "UserClassifieds" });
        return updateClassified;
      } else {
        return updateClassified;
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
};
</script>

<style scoped lang="scss">
@import "../assets/scss/main";

.illusLamp {
  display: none;
}
.main-container {
  display: flex;
  flex-direction: column;
  padding-top: 7rem;
}
button {
  margin-top: 2em;
  background-color: $main-green;
  border-radius: 19px;
  padding: 1px;
  height: 38px;
  color: white;
  width: 400px;
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
</style>
