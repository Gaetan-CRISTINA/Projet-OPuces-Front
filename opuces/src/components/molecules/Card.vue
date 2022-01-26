<template>
  <div class="card display2">
    <HeroAnnonce/>
    <HeaderAnnonce/>
    <EtatAnnonce/>
    <CategorieCardList/>
    <ExcerptAnnonce class="show-content"/>      
    <DescriptionAnnonce class="hide-content"/> 
    <VoirPlus
    v-on:displayHideCardContent="displayHideCardContent"
    class="show-content"
    />
    <div class="hide-content">
      <Ville/>
      <MapWrapper/>
      <AnnonceAuteur/> 
      <VoirMoins/>
      <CtaAnnonce/>
    </div>
  </div>
</template>

<script>
import HeroAnnonce from "../molecules/HeroAnnonce.vue";
import HeaderAnnonce from "../molecules/HeaderAnnonce.vue";
import EtatAnnonce from "../molecules/EtatAnnonce.vue";
import CategorieCardList from "../molecules/CategorieCardList.vue";
import ExcerptAnnonce from "../molecules/ExcerptAnnonce.vue";
import DescriptionAnnonce from "../molecules/DescriptionAnnonce.vue";
import VoirPlus from "../molecules/VoirPlus.vue";
import Ville from "../atoms/Ville.vue";
import MapWrapper from "../molecules/MapWrapper.vue";
import AnnonceAuteur from "../molecules/AnnonceAuteur.vue";
import VoirMoins from "../molecules/VoirMoins.vue";
import CtaAnnonce from "../molecules/CtaAnnonce.vue";

export default {
  name: "Card",
  components: {
    HeroAnnonce,
    HeaderAnnonce,
    EtatAnnonce,
    CategorieCardList,
    ExcerptAnnonce,
    DescriptionAnnonce,
    VoirPlus,
    Ville,
    MapWrapper,
    AnnonceAuteur,
    VoirMoins,
    CtaAnnonce,
  },
  created() {
    
   
  },
  methods: {
    displayHideCardContent: function(evt){
      const hiddenSections = document.querySelectorAll('.hide-content')
      console.log(evt);
      hiddenSections.evt.currentTarget.classList.toggle('show-content');
        
        //const hiddenSections = document.querySelectorAll('.hide-content')

        // for(let hiddenSection of hiddenSections){
        //   hiddenSection.classList.toggle('show-content');
        // }

      },
      
  },
  
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/main";
.card {
  position: relative;
  -webkit-box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.16);
  -moz-box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.16);
  box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.16);
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-radius: 44px;
}

.hide-content {
  height: 0;
  overflow: hidden;
}
.show-content {
  height: 100%;
}
.display1 {
  width: 100%;
}
.display2 {
  width: 48%;
}

@media screen and (min-width: 576px) {
  .display2 {
    width: 262.5px;
  }
}
@media screen and (min-width: 768px) {
  .display2 {
    width: 352.5px;
  }
}
@media screen and (min-width: 992px) {
  .display2 {
    width: 252.5px;
  }
}
@media screen and (min-width: 1200px) {
  .display2 {
    width: 342.5px;
  }
}
@media screen and (min-width: 1400px) {
  .display2 {
    width: 432.5px;
  }
}
</style>

<style  lang="scss">
@import "../../assets/scss/main";

#picto-coeur {
  width: 12px;
  height: 12px;
  fill: $light-yellow !important;
  stroke: $text-color;
  position: absolute;
  top: 9px;
  left: 9px;
}
</style>