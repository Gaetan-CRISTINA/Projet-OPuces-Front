<template>
  <header>
    <div class="container-mobile">
        <div class="flex">
          <PictoUser/>
          <p id="se-connecter">Se connecter</p>
      </div>
      <div class="flex">
          <PictoFilters/>
      </div>
    </div>

    <div class="container-desktop">
        <div>
          <Logo/>
          <p id="logo-typo">O'puces</p>
        </div>
        <div class="flex">
            <PictoFilters/>
        </div>
    </div>
    
  </header>
</template>

<script>
import PictoUser from '../atoms/PictoUser'
import PictoFilters from '../atoms/PictoFilters'
import Logo from '../atoms/Logo'

export default {
  name: 'HeaderMobile',
  components: {
      PictoUser,
      PictoFilters,
      Logo
  },
}
</script>

<style scoped lang="scss">
header {
  padding: 1em 15px;
  width: 100%;
  background-color: #fff;
  display: flex;
  }
.container-mobile {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.flex {
  display: flex;
}
#se-connecter {
  padding-left: 1em;
  position: relative;
  top: 2px;
}
  
  @media screen and (min-width: 576px) {
    .container-mobile {
      width: 540px;
      margin: 0 auto;
    }
  }
  @media screen and (min-width: 768px) {
    .container-mobile {
      width: 720px;
    }
  }
  @media screen and (min-width: 992px) {
    .container-mobile {
      width: 960px;
    }
  }
  @media screen and (min-width: 1200px) {
    .container-mobile {
      width: 1140px;
    }
  }
  @media screen and (min-width: 1400px) {
    .container-mobile {
      width: 1320px;
    }
  }
</style>

