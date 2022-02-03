<template>
  <div>
    <Header2 />
    <div class="illusLamp">
      <IllusLamp />
    </div>
    <div class="main-container">
      <div class="display-cart">
        <h1>Récapitulatif de votre commande</h1>
      </div>
      <h1>Titre de l'annonce</h1>
      <!-- <h2>{{classified.title.rendered}}</h2>  -->
      <h1>Description</h1>
      <!-- <p v-html="classified.content.rendered"></p> -->
      <h1>Prix</h1>
      <!-- <h2>{{classified.classifiedPrice}}€</h2> -->

      <div>
      
      </div>
    </div>
  </div>
</template>

<script>
import Header2 from "../components/organisms/Header2.vue";
import classifiedsService from "../services/classifiedsService";
import IllusLamp from "../components/atoms/IllusLamp.vue";
import storage from "../plugins/storage";

export default {
  name: "UserCart",
  components: {
    Header2,
    IllusLamp,
  },
  async created(){
      const ClassifiedId =  storage.get('ClassifiedIdCart')
      console.log(ClassifiedId);
      this.classified = await classifiedsService.loadClassifiedsById(ClassifiedId);
  }
  
};
</script>


<style scoped lang="scss">
@import "../assets/scss/main";

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