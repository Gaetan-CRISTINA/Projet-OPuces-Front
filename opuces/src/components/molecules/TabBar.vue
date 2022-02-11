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
      v-if="user"
      :to="{
        name: 'CreateClassified',
      }"
    >
      <PictoAdd1 class="button-add" />
    </router-link>

    

  <div v-if="user">
    <router-link
      v-if="!cart"
      :to="{
        name: 'Cart',
      }"
    >
      <PictoEmptyCart />
    </router-link>

    <router-link
      v-if="cart"
      :to="{
        name: 'Cart',
      }"
    >
      <PictoFullCart />
    </router-link>
  </div>

<router-link
    v-if="!user"
      :to="{
        name: 'LoginForm',
      }"
    >
      <PictoUser />
    </router-link>

    <router-link
    v-if="user"
      :to="{
        name: 'UserClassifieds',
      }"
    >
      <PictoAnnonces />
    </router-link>

  </nav>
</template>

<script>
import PictoHome from "../atoms/PictoHome";
import PictoAdd1 from "../atoms/PictoAdd1";
import PictoAnnonces from "../atoms/PictoAnnonces";
import PictoSearch from "../atoms/PictoSearch";
import storage from "../../plugins/storage";
import PictoEmptyCart from "../atoms/PictoEmptyCart";
import PictoFullCart from "../atoms/PictoFullCart";
import PictoUser from "../atoms/PictoUser.vue";

export default {
  name: "TabBar",
  components: {
    PictoHome,
    PictoAdd1,
    PictoAnnonces,
    PictoSearch,
    PictoFullCart,
    PictoEmptyCart,
    PictoUser
  },
  computed: {
    user() {
      const user = storage.get("userData");
      if (user || this.$store.state.user) {
        this.$store.state.user;
        return user;
      } else {
        return false;
      }
    },
    cart() {
      const cartFull = storage.get("ClassifiedIdCart");
      if (cartFull) {
        return true;
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
  left: 20px;
  top: 20px;
}
</style>

<style scoped lang="scss">
@import "../../assets/scss/main.scss";

nav {
  position: relative;
  padding-top: 1em;
  padding-bottom: 1em;
  position: fixed;
  z-index: 999;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: linear-gradient(0deg, rgba(49,199,192,1) 0%, rgba(227,251,255,1) 50%);
  
}
.button-add {
  position: absolute;
  left: calc(100vw/2 - 35px);
  bottom: 25px;
  width: 70px;
  height: 70px;
  border-radius: 100%;
  -webkit-box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.16);
  -moz-box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.16);
  box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.16);
  background: white;
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