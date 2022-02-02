<template>
  <div>
    <Header />
    <div class="main-container">
      <FilterDesktop />
    </div>
    <TabBar/>
  </div>
</template>

<script>
import Header from "../components/organisms/Header.vue";
import FilterDesktop from "../components/organisms/FiltersDesktop.vue";
import TabBar from "../components/molecules/TabBar.vue";
export default {
  name: "Home",
  components: {
    Header,
    FilterDesktop,
    TabBar
  },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/main";

@media screen and (min-width: 576px) {
}
@media screen and (min-width: 768px) {
  
}
@media screen and (min-width: 992px) {
  
}
@media screen and (min-width: 1200px) {
}
@media screen and (min-width: 1400px) {
}

</style>
