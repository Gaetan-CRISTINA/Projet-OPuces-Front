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
    this.keyword = storage.get('searchQuery');
    this.searchCards = await this.classifiedsService.loadClassifiedsByKeyWord(this.keyword);
  },
}
</script>

<style scoped lang="scss">
@import '../../assets/scss/main';

.cards-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
}
.unitCard{
    transition: all .2s ease-in-out
}
.unitCard:hover{
    transform: scale(1.02);
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

