<template>
  <div>
    <Header />
    <div class="main-container">
      <div id="display-annonces">
        <h2>Mes Annonces</h2>
      </div>
      <div>
          <UserCardsList />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/organisms/Header.vue";
import UserCardsList from "../components/organisms/UserCardsList.vue";


export default {
  name: "UserClassifieds",
  components: {
    Header,
    UserCardsList
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