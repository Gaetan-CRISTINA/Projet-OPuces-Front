<template>
    <div class="annonce-section-auteur content-annonce">
        <img src="https://picsum.photos/73" alt="" />
        <div class="text-auteur-annonce">
            <p class="auteur-annonce">Jack Chirack</p>
            <p class="sous-titre-auteur"> 12 autres annonces</p>
            <div class="flex">
                <PictoStar/>
                <PictoStar/>
                <PictoStar/>
                <PictoStar/>
                <PictoStar/>
            </div>
            
        </div>
    </div>
</template>

<script>
import PictoStar from "../atoms/PictoStar.vue";

export default {
  name: "AnnonceAuteur",
  components: {
      PictoStar,
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/main";
.flex {
    display: flex;
}
.flex>* {
    padding-right: .3em;
}
.auteur-annonce {
    padding-bottom: 0 !important;
}
.text-auteur-annonce {
    padding-left: .6em;
}
.annonce-section-auteur{
    display: flex;
    padding-top: 1em;
}
.annonce-section-auteur img {
    border-radius: 100%;
    width: 50px;
    height: 50px;
}
.sous-titre-auteur {
    font-size: 12px;
    font-weight: 100;
    font-style: italic;
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
<style  lang="scss">
@import "../../assets/scss/main";

#picto-star {
    width: 10px;
}
</style>
