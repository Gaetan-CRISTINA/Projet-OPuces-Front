<template>
  <div>
    <Header2 />
    <div class="illusLamp">
      <IllusLamp />
    </div>
    <div class="main-container">
      <div id="display-annonces">
        <h2>Mes Annonces</h2>
      </div>
      <div>
        <UserCardsList />
      </div>
    </div>
    <TabBar />
  </div>
</template>

<script>
import Header2 from "../components/organisms/Header2.vue";
import UserCardsList from "../components/organisms/UserCardsList.vue";
import TabBar from "../components/molecules/TabBar.vue";
import IllusLamp from "../components/atoms/IllusLamp.vue";

export default {
  name: "UserClassifieds",
  components: {
    Header2,
    UserCardsList,
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