<template>
  <div class="img-annoce">
    <div class="flex prix-like">
      <div class="circle"><PictoCoeur /></div>
      <Prix class="prix" />
    </div>
  </div>
</template>

<script>
import PictoCoeur from "../atoms/PictoCoeur.vue";
import Prix from "../molecules/Prix.vue";

export default {
  name: "HeroAnnonce",
  components: {
      PictoCoeur,
      Prix,
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/main";
.img-annoce {
  position: relative;
  background-image: url("https://picsum.photos/400/600");
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

