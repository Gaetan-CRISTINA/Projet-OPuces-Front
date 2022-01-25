<template>
    <div class="voir-moins">
        <p>VOIR MOINS </p>
        <PictoNext/>
    </div>
</template>

<script>
import PictoNext from "../atoms/PictoNext.vue";

export default {
  name: "VoirMoins",
  components: {
      PictoNext,
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/main";
.voir-moins {
    display: flex;
    padding: .5em 0;
    margin-top: .5em;
}
p {
    font-weight: 600;
    font-size: 12px;
    color: $text-color;
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

<style lang="scss">
@import "../../assets/scss/main";

#picto-next {
    width: 10px;
    height: 10px;
    transform: rotateZ(90deg);
    position: relative;
    bottom: 1px;
    left: 5px;
}
</style>