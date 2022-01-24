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
    <div class="flxe">
      <Prix/>
      <SearchBar/>
    </div>
    <div class="flxe">
      <HeaderMobile/>

    </div>
    <PictoHome/>
    <PictoText/>
    <PictoAdd1/>
    <PictoAdd2/>
    <PictoAnnonces/>
    <PictoCamera/>
    <PictoClose/>
    <PictoCoeur/>
    <PictoCompte/>
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
    <TabBar/>
    <PageLoginMobile/>
  </div>
  </div>
</template>

<script>
import IllusFlowers from '../components/atoms/IllusFLowers.vue'
import IllusLamp from '../components/atoms/IllusLamp.vue'
import IllusDesk from '../components/atoms/IllusDesk.vue'
import IllusPlane from '../components/atoms/IllusPlane.vue'

import Logo from '../components/atoms/Logo.vue'

import PictoHome from '../components/atoms/PictoHome.vue'
import PictoText from '../components/atoms/PictoText.vue'
import PictoAdd1 from '../components/atoms/PictoAdd1.vue'
import PictoAdd2 from '../components/atoms/PictoAdd2.vue'
import PictoAnnonces from '../components/atoms/PictoAnnonces.vue'
import PictoCamera from '../components/atoms/PictoCamera.vue'
import PictoClose from '../components/atoms/PictoClose.vue'
import PictoCoeur from '../components/atoms/PictoCoeur.vue'
import PictoCompte from '../components/atoms/PictoCompte.vue'
import PictoEye from '../components/atoms/PictoEye.vue'
import PictoFb from '../components/atoms/PictoFb.vue'
import PictoFilters from '../components/atoms/PictoFilters.vue'
import PictoGoogle from '../components/atoms/PictoGoogle.vue'
import PictoInfo from '../components/atoms/PictoInfo.vue'
import PictoLocation from '../components/atoms/PictoLocation.vue'
import PictoMail from '../components/atoms/PictoMail.vue'
import PictoNav from '../components/atoms/PictoNav.vue'
import PictoNext from '../components/atoms/PictoNext.vue'
import PictoRemove from '../components/atoms/PictoRemove.vue'
import PictoSearch from '../components/atoms/PictoSearch.vue'
import PictoStar from '../components/atoms/PictoStar.vue'
import PictoStarEmpty from '../components/atoms/PictoStarEmpty.vue'
import PictoUser from '../components/atoms/PictoUser.vue'
import PictoDisplay1 from '../components/atoms/PictoDisplay1.vue'
import PictoDisplay2 from '../components/atoms/PictoDisplay2.vue'
import PictoEtat1 from '../components/atoms/PictoEtat1.vue'

import Prix from '../components/molecules/Prix.vue'
import SearchBar from '../components/molecules/SearchBar.vue'

import HeaderMobile from '../components/organisms/HeaderMobile.vue'

import TabBar from '../components/molecules/TabBar.vue'
import PageLoginMobile from '../components/organisms/PageLoginMobile.vue'
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
    PictoEtat1,

    Prix,
    SearchBar,

    HeaderMobile
    TabBar,
    PageLoginMobile
  }
}
</script>

<style scoped lang="scss">
.flex {
  display: flex;
}

</style>