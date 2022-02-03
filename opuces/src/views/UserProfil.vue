<template>
  <div>
    <Header2 />
    <div>
      <UserProfilMobile />
    </div>
  </div>
</template>

<script>
import UserProfilMobile from "../components/organisms/UserProfilMobile.vue";
import Header2 from "../components/organisms/Header2.vue";
export default {
  name: "UserProfil",
  components: {
    UserProfilMobile,
    Header2
  },
};
</script>


<style scoped lang="scss">
@import "../assets/scss/main";

.main-container {
  position: absolute;
  top: 150px;
}
#left-header-mobile {
  display: inline-block;
  margin: 5px 0 15px 15px;
  justify-content: flex-start;
  
}
#left-header-mobile h2{
  font-size: 20px;
  font-weight: bold;
}
#left-header-mobile h2:hover {
  transition: all .3s;
  fill: #2093A7;
}

.headerLink{
  display: flex;
  justify-content: space-between;
  margin: 20px ;
}
button {
  font-size: 12px;
  font-weight: 700;
  color: $main-green;
  padding: 0.5em 1em;
  border-radius: 22px;
  border: solid 1px $main-green;
  background-color: #fff;
  margin-top: 0.5em;
  transition: all 0.3s;
  cursor: pointer;
}
button:hover {
  background-color: $main-green;
  color: #fff;
  border: solid 1px $main-green;
}
</style>