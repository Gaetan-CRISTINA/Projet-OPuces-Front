<template>
  <header>
    <div class="main-container">
      <div id="left-header-mobile" class="flex">
        <PictoUser/>
        <p id="se-connecter">Se connecter</p>
      </div>
      <div id="right-header-mobile" class="flex">
        <PictoFilters/>
      </div>
      <div id="left-header-desktop">
        <a href="#"><span><Logo/></span>O'puces</a>
      </div>
      <div id="center-header-desktop" class="flex">
        <SearchBar/>
      </div>
      <div id="right-header-desktop" class="flex">
        <PictoUser/>
      </div>
    </div>
  </header>
</template>

<script>
import PictoUser from '../atoms/PictoUser'
import PictoFilters from '../atoms/PictoFilters'
import Logo from '../atoms/Logo'
import SearchBar from '../molecules/SearchBar'

export default {
  name: 'HeaderMobile',
  components: {
      PictoUser,
      PictoFilters,
      Logo,
      SearchBar,
  },
}
</script>

<style lang="scss">
@import '../../assets/scss/main';
#left-header-desktop,
#center-header-desktop,
#right-header-desktop {
  display: none;
}
header {
  padding: 1em 0;
  width: 100%;
  background-color: #fff;
  display: flex;
  }
.main-container {
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
    
  }
  @media screen and (min-width: 768px) {
    
  }
  @media screen and (min-width: 992px) {
    #left-header-mobile,
    #right-header-mobile {
      display: none;
    }
    #left-header-desktop,
    #center-header-desktop,
    #right-header-desktop {
      display: block;
    }
    #left-header-desktop a {
      display: flex;
      font-weight: 900;
      font-size: 16px;
      color: $main-green;
      transition: all .3s;
    }
    #left-header-desktop a span {
      margin-right: .3em;
    }
    
    
  }  
  @media screen and (min-width: 1200px) {
   
  }
  @media screen and (min-width: 1400px) {
    
  }
</style>

