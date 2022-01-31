<template>
  <div>
      <ProfilEdit/>
      <PictureEditMobile/>
  </div>
</template>

<script>
import ProfilEdit from "../components/organisms/ProfilEdit.vue"
import PictureEditMobile from "../components/organisms/PictureEditMobile.vue"
export default {
  name: "UserProfilEdit",
  components: {
   ProfilEdit,
   PictureEditMobile
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

