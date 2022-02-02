<template>

    <div class="cards-list"> 
        
        <span class="unitCard" v-for="userClassified in userClassifieds"
            :key="userClassified.id">
       
         
            <UserCard :userClassifiedProps="userClassified" />
        </span>
        
</div>
</template>

<script>
import UserCard from "../molecules/UserCard.vue";
import classifiedsService from "../../services/classifiedsService";


export default {
  name: 'UserCardsList',
  components: {
      UserCard,
      
  },
  data(){
      return{
          userClassifieds: [],
          userId: ''
      };
  },
  async created(){
    this.userId = await classifiedsService.loadAuthor();
    this.userClassifieds = await this.$store.state.services.classified.loadClassifiedsByUser(this.userId);
    
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

