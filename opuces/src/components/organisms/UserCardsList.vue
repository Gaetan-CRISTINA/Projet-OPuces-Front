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
  computed:{
      
  }
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
    transition: all .2s ease-in-out;
    margin-right:25px;
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

