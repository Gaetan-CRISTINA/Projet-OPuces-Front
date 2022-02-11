<template>

    <div class="cards-list"> 
        
        <span class="unitCard" v-for="searchCard in searchCards"
            :key="searchCard.id">
       
         
            <SearchCard :SearchCardProps="searchCard" />
        </span>
        
</div>
</template>

<script>
import SearchCard from "../molecules/SearchCard.vue";
import storage from "../../plugins/storage";
import classifiedsService from '../../services/classifiedsService';



export default {
  name: 'SearchCardsList',
  components: {
      SearchCard,
      
  },
  data(){
      return{
          searchCards: []
      };
  },
  async created(){
      // par Search Bar
    this.keyword = storage.get('searchQuery');
    this.searchCards = await classifiedsService.loadClassifiedsByKeyWord(this.keyword);
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
    width: 100%;
}
.unitCard{
    transition: all .2s ease-in-out
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

