<template>
  <div>
    <Header2 />
    <div class="illusLamp">
      <IllusLamp />
    </div>
    <div>
      <UserProfilMobile />
    </div>
  </div>
</template>

<script>
import UserProfilMobile from "../components/organisms/UserProfilMobile.vue";
import Header2 from "../components/organisms/Header2.vue";
import IllusLamp from "../components/atoms/IllusLamp.vue";
export default {
  name: "UserProfil",
  components: {
    UserProfilMobile,
    Header2,
    IllusLamp
  },
};
</script>


<style scoped lang="scss">
@import "../assets/scss/main";

.illusLamp {
  display: none;
}

@media screen and (min-width: 576px) {
  .illusLamp {
    display: none;
  }
}
@media screen and (min-width: 768px) {
  .illusLamp {
    display: none;
  }
}
@media screen and (min-width: 992px) {
  .illusLamp {
    display: none;
  }
}
@media screen and (min-width: 1200px) {
  .illusLamp {
    display: none;
  }
}
@media screen and (min-width: 1400px) {
  .illusLamp {
    display: inline-block;
    position: fixed;
    margin-left: 6%;
  }
}
</style>