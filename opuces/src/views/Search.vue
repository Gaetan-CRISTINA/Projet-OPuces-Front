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
.main-container{
  width: 50%;
  margin: 20vh auto;
  display: flex;
  justify-content: center;
}
@media screen and (min-width: 576px) {
  .main-container{
  width: 50%;
  margin: 20vh auto;
  display: flex;
  justify-content: center;
}

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
