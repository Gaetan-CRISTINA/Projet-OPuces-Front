<template>
  <div class="voir-plus">
    <button
      v-on:click="handleSeeMore"
    >VOIR PLUS
    <PictoNav/>
    </button>
  </div>
</template>

<script>
import PictoNav from "../atoms/PictoNav.vue";

export default {
  name: "VoirPlus",
  components: {
    PictoNav,
  },
  methods: {
    handleSeeMore: function(evt){
          this.$emit('displayHideCardContent', evt);
      }
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/main";
#picto-nav {
  position:absolute;
  transform: rotateZ(90deg);
  width: 7px;
  fill: $main-green;
  transition: all .3s;
  
}
button:hover #picto-nav {
  transform: rotateZ(-270deg);
  fill: $secondary-green;
}

</style>

<style scoped lang="scss">
@import "../../assets/scss/main";
button {
position:relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: 700;
  color: $main-green;
  padding-top: 1em;
  border: none;
  border-top: solid 1px $main-green;
  background-color: #fff;
  margin-top: 1em;
  transition: all 0.3s;
  cursor: pointer;
}
button:hover {
  color: $secondary-green;
  border-top: solid 1px $secondary-green;
}
.voir-plus {
 
  text-align: center;
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

