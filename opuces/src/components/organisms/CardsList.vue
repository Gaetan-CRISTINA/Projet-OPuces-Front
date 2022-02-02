<template>
    <div class="cards-list"> 
        
        <span class="unitCard" v-for="classified in classifieds"
            :key="classified.id">
       
         
            <Card 
            v-on:displayHideCardContent="displayHideCardContent"
            :classifiedProps="classified" 
            />
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






      // afficher/cacher contenu des cards

      let hideContent = document.querySelectorAll('div.cards-list')[0].children;
      console.log(hideContent);

    //   let hiddenContentHeight = [];
      

    //   for (let i = 0; i < hideContent.length; i++) {
    //     hiddenContentHeight.push(hideContent[i].offsetHeight);
    //     hideContent[i].style.height = 0;
    //   }

    //   console.log(hiddenContentHeight);





  },
  methods: {
    displayHideCardContent: function(evt){
          evt.preventDefault();
          console.log('poutre');
      }

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

