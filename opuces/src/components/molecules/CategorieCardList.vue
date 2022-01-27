<template>
  <div class="liste-categories-annonce content-annonce">
    <CategorieCard />
    
  </div>
</template>

<script>
import CategorieCard from "../molecules/CategorieCard.vue";
import classifiedsService from "../../services/classifiedsService.js";

export default {
  name: "CategorieCardList",
  components: {
      CategorieCard,
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

