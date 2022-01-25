<template>
  <div class="card display2">
    <div class="img-annoce">
      <div class="flex prix-like">
        <div class="circle"><PictoCoeur /></div>
        <Prix class="prix" />
      </div>
    </div>

    <div class="content-annonce">
      <HeaderAnnonce/>
      <EtatAnnonce/>
      <CategorieCardList/>
      <ExcerptAnnonce/>      
      <DescriptionAnnonce/> 
      <VoirPlus />
      <div class="more-content">
        <h3 class="ville">Toulouse</h3>
      </div>
    </div>
    <div class="more-content">
      <MapWrapper/>
      <div class="content-annonce">
        <AnnonceAuteur/> 
        <VoirMoins/>
        <CtaAnnonce/>
      </div>
    </div>
  </div>
</template>

<script>
import PictoCoeur from "../atoms/PictoCoeur.vue";
import Prix from "../molecules/Prix.vue";
import HeaderAnnonce from "../molecules/HeaderAnnonce.vue";
import EtatAnnonce from "../molecules/EtatAnnonce.vue";
import CategorieCardList from "../molecules/CategorieCardList.vue";
import ExcerptAnnonce from "../molecules/ExcerptAnnonce.vue";
import DescriptionAnnonce from "../molecules/DescriptionAnnonce.vue";
import VoirPlus from "../molecules/VoirPlus.vue";
import MapWrapper from "../molecules/MapWrapper.vue";
import AnnonceAuteur from "../molecules/AnnonceAuteur.vue";
import VoirMoins from "../molecules/VoirMoins.vue";
import CtaAnnonce from "../molecules/CtaAnnonce.vue";

export default {
  name: "Card",
  components: {
    PictoCoeur,
    Prix,
    HeaderAnnonce,
    EtatAnnonce,
    CategorieCardList,
    ExcerptAnnonce,
    DescriptionAnnonce,
    VoirPlus,
    MapWrapper,
    AnnonceAuteur,
    VoirMoins,
    CtaAnnonce,
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
  border-radius: 44px;
}
.img-annoce {
  position: relative;
  background-image: url("https://picsum.photos/400/600");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  border-radius: 44px 44px 0 0;
  width: 100%;
  height: 150px;
}
.flex {
  display: flex;
}
.prix-like {
  position: absolute;
  width: calc(100% - 3em);
  bottom: 1em;
  left: 1.5em;
}
.circle{
  background-color: $light-yellow;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  position: relative;
}
.prix {
  position: absolute;
  right: 0;
}
.content-annonce {
  padding: 1.5em;
}
.ville {
  margin-top: 0.5em;
}

// .more-content {
//   height: 0;
//   overflow: hidden;
// }

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