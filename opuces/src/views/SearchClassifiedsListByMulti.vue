<template>
  <div>
    <Header />
    <div class="illusLamp">
      <IllusLamp />
    </div>
    <div class="main-container">
      <div id="display-annonces">
        <h2>Ma Recherche </h2>
      </div>
      <div>
        <SearchCardsListByMulti />
      </div>
    </div>
    <TabBar />
  </div>
</template>

<script>
import Header from "../components/organisms/Header.vue";
import SearchCardsListByMulti from "../components/organisms/SearchCardsListByMulti.vue";
import TabBar from "../components/molecules/TabBar.vue";
import IllusLamp from "../components/atoms/IllusLamp.vue";

export default {
  name: "SearchClassifiedsListByMulti.Vue",
  components: {
    Header,
    SearchCardsListByMulti,
    TabBar,
    IllusLamp,
  }
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
.cards-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: flex-start;
    width: 100%;
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