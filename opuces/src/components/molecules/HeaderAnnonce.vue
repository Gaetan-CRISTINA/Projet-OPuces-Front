<template>
    <div class="header-annonce content-annonce">
        <h3>{{classifiedProps.title.rendered}}</h3>
        <p class="date-annonce">Annonce parue le {{classifiedProps.date}}</p>
        <p class="auteur-annonce">{{classifiedProps.author}}</p>
    </div>
</template>

<script>
import classifiedsService from "../../services/classifiedsService.js"
export default {
  name: "HeaderAnnonce",
  components: {
  },
  props: {
    classifiedProps: Object,
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

