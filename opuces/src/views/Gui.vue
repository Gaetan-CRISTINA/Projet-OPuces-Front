<template>
  <div>
    <div class="flex">
      <IllusFlowers/>
      <IllusLamp/>
      <IllusDesk/>
      <IllusPlane/>
    </div>

    <div class="flex">
      <Logo/>
    </div>

    <div class="flex">
      <PictoHome/>
      <PictoText/>
      <PictoAdd1/>
      <PictoAdd2/>
      <PictoAnnonces/>
      <PictoCamera/>
      <PictoClose/>
      <PictoCoeur/>
      <PictoCompte/>
    </div>
    
    






    
  </div>
</template>

<script>

import IllusFlowers from '../components/IllusFLowers.vue'
import IllusLamp from '../components/IllusLamp.vue'
import IllusDesk from '../components/IllusDesk.vue'
import IllusPlane from '../components/IllusPlane.vue'

import Logo from '../components/Logo.vue'

import PictoHome from '../components/PictoHome.vue'
import PictoText from '../components/PictoText.vue'
import PictoAdd1 from '../components/PictoAdd1.vue'
import PictoAdd2 from '../components/PictoAdd2.vue'
import PictoAnnonces from '../components/PictoAnnonces.vue'
import PictoCamera from '../components/PictoCamera.vue'
import PictoClose from '../components/PictoClose.vue'
import PictoCoeur from '../components/PictoCoeur.vue'
import PictoCompte from '../components/PictoCompte.vue'

export default {
  name: 'Gui',
  components: {
    IllusFlowers,
    IllusLamp,
    IllusDesk,
    IllusPlane,

    Logo,

    PictoHome,
    PictoText,
    PictoAdd1,
    PictoAdd2,
    PictoAnnonces,
    PictoCamera,
    PictoClose,
    PictoCoeur,
    PictoCompte,
  }
}
</script>

<style scoped lang="scss">
.flex {
  display: flex;
}
</style>