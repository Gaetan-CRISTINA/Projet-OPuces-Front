<template>
  <header>
    <div class="main-container">
      <div class="flex">
        <div id="left-header-mobile">
          <PictoUser />
          <p id="se-connecter">Se connecter</p>
        </div>
        <div id="right-header-mobile">
          <PictoFilters />
        </div>
        <div id="left-header-desktop">
          <a href="#">
            <span id="logo-link"><Logo /></span>
            <h2 id="txt-link">O'puces</h2>
          </a>
        </div>
        <div id="center-header-desktop">
          <SearchBar />
        </div>
        <div style="display: none" id="right-header-desktop">
          <PictoUser />
        </div>
        <div id="right-header-desktop">
          <PictoHome />
          <PictoAnnonces />
          <PictoAdd2 />
          <img src="https://picsum.photos/30" alt="" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import PictoUser from "../atoms/PictoUser";
import PictoFilters from "../atoms/PictoFilters";
import Logo from "../atoms/Logo";
import SearchBar from "../molecules/SearchBar";
import PictoAdd2 from "../atoms/PictoAdd2";
import PictoAnnonces from "../atoms/PictoAnnonces";
import PictoHome from "../atoms/PictoHome";

export default {
  name: "HeaderMobile",
  components: {
    PictoUser,
    PictoFilters,
    Logo,
    SearchBar,
    PictoAdd2,
    PictoAnnonces,
    PictoHome,
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/main";
.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
#left-header-mobile,
#right-header-mobile {
  display: flex;
}
#left-header-desktop,
#center-header-desktop,
#right-header-desktop {
  display: none;
}
header {
  position: fixed;
  z-index: 999;
  padding: 0.5em 0 !important;
  width: 100%;
  background-color: #fff;
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
  #left-header-desktop svg {
    width: 32px;
  }
  #left-header-mobile,
  #right-header-mobile {
    display: none;
  }
  #left-header-desktop,
  #center-header-desktop,
  #right-header-desktop {
    display: flex;
  }
  #left-header-desktop a {
    display: flex;
    align-items: center;
  }
  #left-header-desktop a:hover h2 {
    color: $secondary-green;
  }
  #left-header-desktop #logo-link {
    margin-right: 0.3em;
  }
  #left-header-desktop h2 {
    position: relative;
    top: -7px;
    font-weight: 900;
    font-size: 18px;
    color: $main-green;
    transition: all 0.3s;
  }
  #right-header-desktop img {
    border-radius: 100%;
    width: 30px;
    height: 30px;
  }
  #right-header-desktop {
    align-items: center;
  }
  #right-header-desktop > * {
    margin-left: 2em;
  }
  #right-header-desktop > *:hover {
    cursor: pointer;
  }
}
@media screen and (min-width: 1200px) {
}
@media screen and (min-width: 1400px) {
}
</style>


<style lang="scss">
@import "../../assets/scss/main";
#div-logo {
  width: 32px;
}
#left-header-desktop a:hover svg {
  fill: $secondary-green !important;
}
#picto-home {
  fill: $main-green !important;
}
</style>
