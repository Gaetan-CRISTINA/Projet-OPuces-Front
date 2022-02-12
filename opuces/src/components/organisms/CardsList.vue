<template>
    <div class="cards-list"> 
        
        <!-- <span class="unitCard" v-for="classified in classifieds"
            :key="classified.id">

            <Card 
            :classifiedProps="classified" 
            />    
        </span> -->

            <Card 
            class="unitCard" 
            v-for="classified in classifieds"
            :key="classified.id"
            :classifiedProps="classified" 
            />
        
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
  },
}
</script>

<style scoped lang="scss">
@import '../../assets/scss/main';

.cards-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: flex-start;
    margin: 10px;
}
.unitCard{
    transition: all .2s ease-in-out;
}
@media screen and (min-width: 576px) {
   .cards-list {
       justify-content: space-evenly;
       margin: auto;
   }
}
@media screen and (min-width: 768px) {
    .cards-list{
        justify-content: space-evenly;
        
    }
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

