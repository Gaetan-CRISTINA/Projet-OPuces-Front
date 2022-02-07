<template>
  <div>
    <Header />
    <div class="illusLamp">
      <IllusLamp />
    </div>
    <div class="main-container">
      <div id="display-annonces">
        <h2>Me Recherche </h2>
      </div>
      <div>
        <SearchCardsList />
      </div>
    </div>
    <TabBar />
  </div>
</template>

<script>
import Header from "../components/organisms/Header.vue";
import SearchCardsList from "../components/organisms/SearchCardsList.vue";
import TabBar from "../components/molecules/TabBar.vue";
import IllusLamp from "../components/atoms/IllusLamp.vue";

export default {
  name: "SearchClassifiedsList",
  components: {
    Header,
    SearchCardsList,
    TabBar,
    IllusLamp,
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
h2 {
  margin-top: 3rem;
}
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