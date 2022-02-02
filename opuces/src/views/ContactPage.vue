<template>
  <div>
      <!-- <Header/> -->
      <ContactUserOffline/> 
  </div>
</template>

<script>
import ContactUserOffline from "../components/organisms/ContactUserOffline.vue"
// import Header from "../components/organisms/Header.vue"
export default {
  name: "ContactPage",
  components: {
   ContactUserOffline,
   //Header,
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

