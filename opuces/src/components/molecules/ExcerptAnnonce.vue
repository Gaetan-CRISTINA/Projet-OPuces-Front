<template>
  <p class="excerpt-annonce content-annonce" v-html="recipeProps.excerpt.rendered">
    
  </p>
</template>

<script>
import classifiedsService from "../../services/classifiedsService.js";
export default {
  name: "ExcerptAnnonce",
  components: {
      
  },
  data(){
      return{
          classifieds: []
      };
  },
  async load(){
      this.classifieds = await classifiedsService.loadClassified();
  } 
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/main";
.excerpt-annonce {
  overflow: hidden !important;
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

