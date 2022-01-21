<template>
  <footer>
      <a href="#"><PictoHome/></a>
      <a href="#"><PictoSearch/></a>
      <a href="#"><PictoAdd1/></a>
      <div class="add">
          <a href="#"><PictoAdd2/></a>
      </div>
      <a href="#"><PictoAnnonces/></a>
      <a href="#"><PictoCoeur/></a>
  </footer>
</template>

<script>
import PictoHome from '../atoms/PictoHome'
import PictoSearch from '../atoms/PictoSearch.vue'
import PictoAnnonces from '../atoms/PictoAnnonces.vue'
import PictoCoeur from '../atoms/PictoCoeur.vue'
import PictoAdd1 from '../atoms/PictoAdd1.vue'
import PictoAdd2 from '../atoms/PictoAdd2.vue'

export default {
  name: 'TabBar',
  components: {
      PictoHome,
      PictoSearch,
      PictoAnnonces,
      PictoCoeur,
      PictoAdd1,
      PictoAdd2,
  }
   
  


}
</script>

<style scoped lang="scss">
@import "../../scss/main.scss";

footer {
    height:63px;;
    width:375px;
    background-color:$light-grey;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.add {
    display:none;
}
</style>