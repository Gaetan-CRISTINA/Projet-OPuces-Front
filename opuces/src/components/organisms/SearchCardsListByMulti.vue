<template>

    <div class="cards-list"> 
        
        <span class="unitCard" v-for="searchCard in searchCards"
            :key="searchCard.id">
       
         
            <SearchCardByMulti :SearchCardProps="searchCard" />
        </span>
        
</div>
</template>

<script>
import SearchCardByMulti from "../molecules/SearchCardByMulti.vue";
import storage from "../../plugins/storage";
import classifiedsService from '../../services/classifiedsService';



export default {
  name: 'SearchCardsListByMulti',
  components: {
      SearchCardByMulti,
      
  },
  data(){
      return{
        searchCards: [],
        searchCardsArray: []
      };
  },
  async created(){
    this.keyWord = storage.get('searchQueries');
    console.log(this.keyWord);
    this.searchCardsArray = await classifiedsService.getQueryClassified(this.keyWord);
    this.searchCards = this.searchCardsArray[0];
    console.log(this.searchCards);
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
    margin-bottom: 160px;
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

