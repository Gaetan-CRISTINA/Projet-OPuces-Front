<template>

  <div>
    <Header />
    <div class="main-container">
      <div id="display-annonces">
        <h2>Les Dernières Annonces</h2>
        <PictoDisplay2/>
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
import PictoDisplay2 from "../components/atoms/PictoDisplay2.vue";
import TabBar from "../components/molecules/TabBar.vue";



export default {
  name: "Home",
  components: {
    Header,
    FiltersDesktop,
    CardsList,
    PictoDisplay2,
    TabBar,
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