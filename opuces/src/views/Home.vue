<template>
  <div>
    <Header />
    <div class="main-container">
      <div class="flex">
        <div class="site-content">
          <CardsList />
        </div>
        <div class="fixe-right">
          <FiltersDesktop />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/organisms/Header.vue";
import FiltersDesktop from "../components/organisms/FiltersDesktop.vue";
import CardsList from "../components/organisms/CardsList.vue";

export default {
  name: "Home",
  components: {
    Header,
    FiltersDesktop,
    CardsList,
  },
};
</script>

<style scoped lang="scss">
.main-container {
  position: relative;
  top: 70px;
}
.flex {
  display: flex;
}
</style>