<template>
  <div>
    <Header />
    <div class="main-container">
      <div id="display-annonces">
        <h1>UserClassifieds</h1>
      </div>
      <div>
          <CardsList />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/organisms/Header.vue";
import CardsList from "../components/organisms/CardsList.vue";

export default {
  name: "UserClassifieds",
  components: {
    Header,
    CardsList
  },
};


</script>
<style scoped lang="scss">
@import "../assets/scss/main";

.main-container {
  position: relative;
  top: 70px;
}
#display-annonces {
    display: flex;
    justify-content: space-between;
    padding-bottom: 1em;
  }
</style>