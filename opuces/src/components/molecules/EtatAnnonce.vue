<template>
  <div class="etat content-annonce">
    <div class="picto-etat"><PictoEtat1 /></div>
    <p>Parfait état</p>
  </div>
</template>

<script>
import PictoEtat1 from "../atoms/PictoEtat1.vue";

export default {
  name: "EtatAnnonce",
  components: {
    PictoEtat1,
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


#picto-etat1 {
  position: absolute;
  top: 4px;
  left: 3px;
}
</style>