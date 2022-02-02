<template>

  <div>
    <Header />
    <div class="main-container">
      <div id="display-annonces">

        <h2>Les Dernières Annonces</h2>
        <PictoDisplay1 
          v-on:displayRowHome="displayRowHome"
        />
        <PictoDisplay2
          v-on:displayColumnHome="displayColumnHome"
        />

      </div>
      <div class="flex">
        <div class="site-content">
          <CardsList />
        </div>
        <div class="fixe-right">
          <FiltersDesktop />
        </div>
      </div>
    </div>
    <TabBar/>
  </div>
</template>

<script>
import Header from "../components/organisms/Header.vue";
import FiltersDesktop from "../components/organisms/FiltersDesktop.vue";
import CardsList from "../components/organisms/CardsList.vue";
import PictoDisplay1 from "../components/atoms/PictoDisplay1.vue";
import PictoDisplay2 from "../components/atoms/PictoDisplay2.vue";
import TabBar from "../components/molecules/TabBar.vue";



export default {
  name: "Home",
  components: {
    Header,
    FiltersDesktop,
    CardsList,
    PictoDisplay1,
    PictoDisplay2,
    TabBar,
  },
  methods: {
    displayColumnHome: function(evt){
          evt.preventDefault();
          let buttonDisplay2 = evt.currentTarget;
          let buttonDisplay1 = buttonDisplay2.closest('.main-container').querySelector('#display-annonces #picto-display1');
          let cards = buttonDisplay2.closest('.main-container').querySelectorAll('.flex .site-content .cards-list>span');
          for (let i = 0; i < cards.length; i++){
            if(cards[i].querySelector('.card').classList.contains('display2')) {
              cards[i].querySelector('.card').classList.remove('display2')
              cards[i].querySelector('.card').classList.add('display1')
              buttonDisplay2.style.display = 'none';
              buttonDisplay1.style.display = 'block';  
            }

          }
      },
    displayRowHome: function(evt){
          evt.preventDefault();
          let buttonDisplay1 = evt.currentTarget;
          let buttonDisplay2 = buttonDisplay1.closest('.main-container').querySelector('#display-annonces #picto-display2');
          let cards = buttonDisplay1.closest('.main-container').querySelectorAll('.flex .site-content .cards-list>span');
          for (let i = 0; i < cards.length; i++){
            if(cards[i].querySelector('.card').classList.contains('display1')) {
              cards[i].querySelector('.card').classList.remove('display1')
              cards[i].querySelector('.card').classList.add('display2')
              buttonDisplay1.style.display = 'none';  
              buttonDisplay2.style.display = 'block';
            }

          }

      }  
  },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/main";

.main-container {
  position: relative;
  top: 70px;
}
#display-annonces {
    display: flex;
    justify-content: space-between;
    padding-bottom: 1em;
  }
@media screen and (min-width: 576px) {
    
  }
@media screen and (min-width: 768px) {
    
} 
@media screen and (min-width: 992px) {
  .main-container {
    top: 100px;
  }
  .flex {
    display: flex;
  }
  #display-annonces {
    width: 520px;

  }
}
@media screen and (min-width: 1200px) {
    #display-annonces {
    width: 700px;
  }
}
@media screen and (min-width: 1400px) {
    #display-annonces {
    width: 880px;
  }
}
</style>