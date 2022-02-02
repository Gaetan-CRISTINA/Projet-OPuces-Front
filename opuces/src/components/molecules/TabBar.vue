<template>
  <nav>
    <router-link
      :to="{
        name: 'Home',
      }"
    >
      <PictoHome />
    </router-link>

    <router-link
    :to="{
      name: 'searchMobile',
      }"
      >
    <PictoSearch />
    </router-link>
    <router-link
      :to="{
        name: 'UserClassifieds',
      }"
    >
      <PictoAnnonces />
    </router-link>

    <router-link
      v-if="user"
      :to="{
        name: 'CreateClassified',
      }"
    >
      <PictoAdd1 class="button-add" />
    </router-link>
  </nav>
</template>

<script>
import PictoHome from "../atoms/PictoHome";
import PictoAdd1 from "../atoms/PictoAdd1";
import PictoAnnonces from "../atoms/PictoAnnonces";
import PictoSearch from "../atoms/PictoSearch";

export default {
  name: "TabBar",
  components: {
    PictoHome,
    PictoAdd1,
    PictoAnnonces,
    PictoSearch,
  },
  computed: {
    user() {
      if (this.$store.state.user) {
        return this.$store.state.user;
      } else {
        return false;
      }
    },
  },
};
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
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: linear-gradient(0deg, rgba(49,199,192,1) 0%, rgba(227,251,255,1) 50%);;
  
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
  background: white;
  transition: all .2s ease-in-out;
}
.button-add:hover{
  transform: scale(1.2);
}

@media screen and (min-width: 576px) {
}
@media screen and (min-width: 768px) {
}
@media screen and (min-width: 992px) {
  nav {
    display: none;
  }
}
@media screen and (min-width: 1200px) {
}
@media screen and (min-width: 1400px) {
}
</style>