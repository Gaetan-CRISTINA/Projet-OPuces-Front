<template>
  <div class="card display2">
    <!-- <HeroAnnonce/> -->
    <div class="img-annoce">
      <img src="https://picsum.photos/400/600" alt="classifiedImage" class="img-annoce" />
      <div class="flex prix-like">
        <span class="prix">{{ SearchCardProps.classifiedPrice }} €</span>
      </div>
    </div>

    <!-- <HeaderAnnonce/> -->
    <div class="header-annonce content-annonce">
      <h3>{{ SearchCardProps.title.rendered }}</h3>
      <p class="date-annonce">Annonce parue le {{ SearchCardProps.date }}</p>
      <p class="auteur-annonce">
      </p>
    </div>

    <!-- <EtatAnnonce/> -->
    <div class="etat content-annonce">
      <div class="picto-etat"><PictoEtat1 /></div>
      <p>{{ productState['name'] }}</p>
    </div>

    <!-- <CategorieCardList/> -->
    <div class="liste-categories-annonce content-annonce">
      <!-- <CategorieCard /> -->
      <div class="category-card-tag">
        <p>{{ categoryName.name }}</p>
      </div>
    </div>

    <!-- <ExcerptAnnonce class="show-content"/>  -->
    <p
      class="excerpt-annonce content-annonce"
      v-html="SearchCardProps.excerpt.rendered + '[...]'"
    ></p>

    <!-- <div class="voir-plus">
    
    <button
      
    >VOIR L'ANNONCE</button>
    
  </div> -->

    <div class="hide-content">
      <!--<DescriptionAnnonce class="hide-content"/>-->
      <p
        class="description-annonce content-annonce"
        v-html="SearchCardProps.content.rendered"
      ></p>
      <VoirMoins />
      <!-- <CtaAnnonce/> -->
      <div class="CTA-annonces content-annonce">
        <button id="acheter" @click="StoreClassified">
          <router-link
          v-if="user"
            :to="{
              name: 'Cart',
            }"
          >
            Acheter
          </router-link>
           <router-link
          v-if="!user"
            :to="{
              name: 'LoginForm',
            }"
          >
            Se connecter
          </router-link>
        </button>

        <button id="contacter">
          <router-link
            :to="{
              name: 'ContactPage',
            }"
            >CONTACTER</router-link
          >
        </button>
      </div>
    </div>

    <VoirPlus
      v-on:displayHideCardContent="displayHideCardContent"
      class="show-content content-annonce"
    />
  </div>
</template>

<script>
import Vue from "vue";


import VoirPlus from "../molecules/VoirPlus.vue";

import VoirMoins from "../molecules/VoirMoins.vue";
import classifiedsService from "../../services/classifiedsService.js";
import PictoEtat1 from "../atoms/PictoEtat1.vue";
import storage from "../../plugins/storage";
import userService from "../../services/userService";
export default {
  name: "Card",
  components: {
    VoirMoins,
    PictoEtat1,
    VoirPlus,
  },
  props: {
    SearchCardProps: Object
  },
  

  async load() {
    this.categories = await classifiedsService.loadClassifiedProductCategory();
  },

  async created() {
    let typeCusto = "ProductCategory";
    this.categoryName = await classifiedsService.loadOneCustonomy(
      typeCusto,
      this.SearchCardProps.ProductCategory[0]
    );

    typeCusto = "productstate";
    this.productState = await classifiedsService.loadOneCustonomy(
      typeCusto,
      this.SearchCardProps.ProductState
    );

    //AFFICHER CACHER CONTENU SUPPLEMENTAIRE CARDS
    Vue.prototype.$hiddenContentHeight = [];
    Vue.prototype.$hideContent = document.querySelectorAll(".hide-content");

    for (let i = 0; i < this.$hideContent.length; i++) {
      this.$hiddenContentHeight.push(this.$hideContent[i].offsetHeight);
      this.$hideContent[i].style.height = 0;
    }
  },

  data() {
    return {
      categoryName: "",
      productState: "",
    };
  },
  computed: {
    getImage() {
      if (this.SearchCardProps._embedded["wp:featuredmedia"]) {
        return this.SearchCardProps._embedded["wp:featuredmedia"][0].source_url;
      } else {
        return "https://media.istockphoto.com/vectors/no-image-vector-symbol-missing-available-icon-no-gallery-for-this-vector-id1128826884?k=20&m=1128826884&s=612x612&w=0&h=3GMtsYpW6jmRY9L47CwA-Ou0yYIc5BXRQZmcc81MT78=";
      }
    },
      //TODO
      // author name en Majuscule (1ere lettre)
    //   capitalizeString(){
    //    let input = document.getElementByClass("auteur-annonce");
    //    let headingElement = document.getElementById("modified-string");
    //    let string = input.value;
    //    headingElement.innerHTML = string.charAt(0).toUpperCase() +
    //        string.slice(1); ;
    //   }
    // },
    user() {
      const user = storage.get('userData');
      if (user || this.$store.state.user) {
        this.$store.state.user;
        return user;
      } else {
        return false;
      }
    },
  },

  methods: {
    async StoreClassified(event) {
      event.preventDefault();
      storage.set("ClassifiedIdCart", this.SearchCardProps.id);
      this.id = await classifiedsService.loadAuthor();
      storage.set("UserIdLogged", this.id);

      this.userInfos = await userService.loadUserFromUserTable(this.id);
      storage.set('UserInfos', this.userInfos);

    },
    displayHideCardContent: function (evt) {
      evt.preventDefault;
      //console.log(evt.currentTarget.closest('div').closest('.card').querySelector('.hide-content'));
      let currentHideContent = evt.currentTarget
        .closest("div")
        .closest(".card")
        .querySelector(".hide-content");

      if (currentHideContent.hasAttribute("style")) {
        currentHideContent.removeAttribute("style");
        evt.currentTarget.querySelector("#picto-nav").style.transform =
          "rotateZ(-90deg)";

        //Tentative de faire faire un 360 à la flêche à chaque survol...
        //let rotation = 360;
        // evt.currentTarget.addEventListener('mouseenter', function(e) {
        //   e.currentTarget.querySelector('#picto-nav').style.transform = 'rotateZ(' -90 + rotation + 'deg)';
        // }, false)
      } else {
        currentHideContent.style.height = 0;
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/main";
.CTA-annonces {
  padding-top: 0.5em;
  display: flex;
  justify-content: space-between;
}
button {
  width: 48%;
  height: 38px;
  border-radius: 22px;
  border: none;
  font-weight: 600;
  transition: all 0.3s;
  cursor: pointer;
}
#acheter {
  color: #fff;
  background-color: $main-green;
}
#acheter:hover {
  background-color: $secondary-green;
}
#contacter {
  color: $main-green;
  background-color: #fff;
  border: solid 1px $main-green;
}
#contacter:hover {
  color: $secondary-green;
  border: solid 1px $secondary-green;
}
.etat {
  display: flex;
  align-items: center;
  margin-bottom: 0.5em;
}
.category-card-tag {
  display: inline-block;
  background-color: $light-yellow;
  padding: 0.3em 0.8em;
  border-radius: 20px;
  margin-right: 0.5em;
  margin-bottom: 0.5em;
  & p {
    font-size: 10px;
    font-weight: 700;
  }
}
span {
  font-weight: 600;
  color: $main-green;
  background-color: $light-yellow;
  padding: 5.5px 0.7em;
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

.voir-plus {
  text-align: center;
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
  overflow: hidden;
  transition: all 0.3s;
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
.circle {
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
.display2 {
    width: 252.5px;
  }
@media screen and (min-width: 576px) {
  // .display2 {
  //   width: 262.5px;
  // }
}
@media screen and (min-width: 768px) {
  // .display2 {
  //   width: 352.5px;
  // }
}
@media screen and (min-width: 992px) {
  // .display2 {
  //   width: 252.5px;
  // }
}
@media screen and (min-width: 1200px) {
  // .display2 {
  //   width: 342.5px;
  // }
}
@media screen and (min-width: 1400px) {
  // .display2 {
  //   width: 432.5px;
  // }
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