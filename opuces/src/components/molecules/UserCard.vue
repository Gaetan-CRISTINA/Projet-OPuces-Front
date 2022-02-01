<template>
  <div class="card display2">
    
    <!-- <HeroAnnonce/> -->
    <div class="img-annoce">
      <img src="https://picsum.photos/400/600" alt="classifiedImage" class="img-annoce">
    <div class="flex prix-like">
      
      <span class="prix">{{userClassifiedProps.classifiedPrice}}€</span>
    </div>
  </div>

    <!-- <HeaderAnnonce/> -->
    <div class="header-annonce content-annonce">
        <h3>{{userClassifiedProps.title.rendered}}</h3>
        <p class="date-annonce">Annonce parue le {{userClassifiedProps.date}}</p>
    </div>

    <!-- <EtatAnnonce/> -->
    <div class="etat content-annonce">
    <div class="picto-etat"><PictoEtat1 /></div>
    <p>{{productState.name}}</p>
  </div>

    <!-- <CategorieCardList/> -->
  <div class="liste-categories-annonce content-annonce">
    <!-- <CategorieCard /> -->
    <div class="category-card-tag">
      <p>{{categoryName.name}}</p>
    </div>
  </div>

    <!-- <ExcerptAnnonce class="show-content"/>  -->
    <p class="excerpt-annonce content-annonce" v-html="userClassifiedProps.excerpt.rendered + '[...]'">
     </p> 
    <!--<DescriptionAnnonce class="hide-content"/>-->
    <p class="description-annonce content-annonce hide-content" v-html="userClassifiedProps.content.rendered"> </p>
    
    
    <!-- <VoirPlus
    v-on:displayHideCardContent="displayHideCardContent"
    class="show-content"
    /> -->
      
    <div class="voir-plus">
    
    <button
      
    >VOIR L'ANNONCE</button>

    <button class="delete"
      
    >Supprimer L'ANNONCE</button>
    
    </div>

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

import Ville from "../atoms/Ville.vue";
import MapWrapper from "../molecules/MapWrapper.vue";
import AnnonceAuteur from "../molecules/AnnonceAuteur.vue";
import VoirMoins from "../molecules/VoirMoins.vue";
import CtaAnnonce from "../molecules/CtaAnnonce.vue";
import classifiedsService from "../../services/classifiedsService.js";
import PictoEtat1 from "../atoms/PictoEtat1.vue";

export default {
  name: "UserCard",
  components: {
    Ville,
    MapWrapper,
    AnnonceAuteur,
    VoirMoins,
    CtaAnnonce,
    PictoEtat1,
     
  },
  props: {
    userClassifiedProps: Object,
  }, 
    
  async load(){
      this.categories = await classifiedsService.loadClassifiedProductCategory();
  },
  async created(){  
  let typeCusto = "ProductCategory";
  this.categoryName = await classifiedsService.loadOneCustonomy(typeCusto, this.classifiedProps.ProductCategory[0]);
  typeCusto = "productstate";
  this.productState = await classifiedsService.loadOneCustonomy(typeCusto, this.classifiedProps.ProductState);
  console.log(this.classifiedProps.productState);
  },
  data(){
    return{
      categoryName: '',
      productState: ''
    }
  },
 
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/main";
.etat {
  display: flex;
  align-items: center;
  margin-bottom: 0.5em;
}
.category-card-tag {
  display:inline-block;
  background-color: $light-yellow;
  padding: 0.3em 0.8em;
  border-radius: 20px;
  margin-right: .5em;
  margin-bottom: .5em;
  & p {
    font-size: 10px;
    font-weight: 700;
  }
}
span {
    font-weight: 600;
    color: $main-green;
    background-color: $light-yellow;
    padding: 5.5px .7em;
    border-radius: 20px;
}
.description-annonce {
  overflow: hidden;
}
button {
  font-size: 12px;
  font-weight: 700;
  color: $main-green;
  padding: 0.5em 1em;
  border-radius: 22px;
  border: solid 1px $main-green;
  background-color: #fff;
  margin-top: 0.5em;
  transition: all 0.3s;
  cursor: pointer;
}
button:hover {
  background-color: $main-green;
  color: #fff;
  border: solid 1px $main-green;
}
.delete:hover{
  background-color: $social-google;
  color: white;
  border: solid 1px $social-google;
}
.voir-plus {
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: auto;
}
.picto-etat {
  background-color: $light-yellow;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  position: relative;
}

.etat p {
  font-size: 12px;
  font-style: italic;
  padding-left: 1em;
}
.card {
  position: relative;
  -webkit-box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.16);
  -moz-box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.16);
  box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.16);
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-radius: 44px;
}
.excerpt-annonce {
  overflow: hidden !important;
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
.img-annoce {
  position: relative;
  // background-image: url("https://picsum.photos/400/600");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  border-radius: 44px 44px 0 0;
  width: 100%;
  height: 150px;
  margin-bottom: 1em;
}
.flex {
  display: flex;
  margin-bottom: 25px;
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
#picto-etat1 {
  position: absolute;
  top: 4px;
  left: 3px;
}
</style>