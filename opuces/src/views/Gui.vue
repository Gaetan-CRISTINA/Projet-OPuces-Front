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
    <PictoEye/>
    <PictoFb/>
    <PictoFilters/>
    <PictoGoogle/>   
    <PictoInfo/>
    <PictoLocation/>
    <PictoMail/>
    <PictoNav/>
    <PictoNext/>
    <PictoRemove/>
    <PictoSearch/>
    <PictoStar/>
    <PictoStarEmpty/>
    <PictoUser/>
    <PictoDisplay1/>
    <PictoDisplay2/>
    <PictoEtat1/>
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
import PictoEye from '../components/PictoEye.vue'
import PictoFb from '../components/PictoFb.vue'
import PictoFilters from '../components/PictoFilters.vue'
import PictoGoogle from '../components/PictoGoogle.vue'
import PictoInfo from '../components/PictoInfo.vue'
import PictoLocation from '../components/PictoLocation.vue'
import PictoMail from '../components/PictoMail.vue'
import PictoNav from '../components/PictoNav.vue'
import PictoNext from '../components/PictoNext.vue'
import PictoRemove from '../components/PictoRemove.vue'
import PictoSearch from '../components/PictoSearch.vue'
import PictoStar from '../components/PictoStar.vue'
import PictoStarEmpty from '../components/PictoStarEmpty.vue'
import PictoUser from '../components/PictoUser.vue'
import PictoDisplay1 from '../components/PictoDisplay1.vue'
import PictoDisplay2 from '../components/PictoDisplay2.vue'
import PictoEtat1 from '../components/PictoEtat1.vue'

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
    PictoEye,
    PictoFb,
    PictoFilters,
    PictoGoogle,
    PictoInfo,
    PictoLocation,
    PictoMail,
    PictoNav,
    PictoNext,
    PictoRemove,
    PictoSearch,
    PictoStar,
    PictoStarEmpty,
    PictoUser,
    PictoDisplay1,
    PictoDisplay2,
    PictoEtat1
  }
}
</script>

<style scoped lang="scss">
.flex {
  display: flex;
}

</style>