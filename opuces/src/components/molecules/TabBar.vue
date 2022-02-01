<template>
  <nav>
      <PictoHome/>
      <PictoSearch/>
      <PictoAnnonces/>
      <PictoAdd1 class="button-add"/>
     
  </nav>
</template>

<script>
import PictoHome from '../atoms/PictoHome'
import PictoAdd1 from '../atoms/PictoAdd1'
import PictoAnnonces from '../atoms/PictoAnnonces'
import PictoSearch from '../atoms/PictoSearch'

export default {
  name: 'TabBar',
  components: {
      PictoHome,
      PictoAdd1,
      PictoAnnonces,
      PictoSearch,
  }
}
</script>

<style lang="scss">
#picto-add1 {
    position: relative;
    width: 30px;
    left: 22px;
    top: 22px;
}
</style>

<style scoped lang="scss">
@import "../../assets/scss/main.scss";

nav {
    position: fixed;
    z-index: 999;
    bottom: 0;
    width:100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
.button-add {
    position: relative;
    bottom: 35px;
    width: 75px;
    height: 75px;
    border-radius: 100%;
    -webkit-box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.16);
    -moz-box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.16);
    box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.16);
}
</style>