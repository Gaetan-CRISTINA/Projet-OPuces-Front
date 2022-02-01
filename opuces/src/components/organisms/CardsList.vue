<template>
    <div class="cards-list"> 
        
        <span v-for="classified in classifieds"
            :key="classified.id">
       
         
            <Card :classifiedProps="classified" />
        </span>
    </div>
</template>

<script>
import Card from "../molecules/Card.vue";
import classifiedsService from "../../services/classifiedsService";

export default {
  name: 'CardsList',
  components: {
      Card,
  },
  data(){
      return{
          classifieds: []
      };
  },
  async created(){
      this.classifieds = await classifiedsService.loadClassified();
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/scss/main';

.cards-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
}
@media screen and (min-width: 576px) {
   
}
@media screen and (min-width: 768px) {
    
}
@media screen and (min-width: 992px) {
    .cards-list {
        width: 520px;
    }
}  
@media screen and (min-width: 1200px) {
    .cards-list {
        width: 700px;
    }
}
@media screen and (min-width: 1400px) {
    .cards-list {
        width: 880px;
    }
}
</style>

