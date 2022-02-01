<template>
  <div>
    <Header />
    <div class="main-container">
      <div id="display-annonces">
        <h1>Mes Annonces</h1>
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
import classifiedsService from '../services/classifiedsService';
// import storage from "../plugins/storage";
// import userService from "../services/userService";

export default {
  name: "UserClassifieds",
  components: {
    Header,
    UserCardsList
  },
  data(){
    return {
      classifiedId: null,
      classified: [],
      userId: "",
    }
  },
  async created(){   
    this.userId = await classifiedsService.loadAuthor();
    this.classifieds = await this.$store.state.services.classified.loadClassifiedsByUser(this.userId);
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