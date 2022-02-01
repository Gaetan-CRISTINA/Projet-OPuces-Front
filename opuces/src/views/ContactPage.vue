<template>
  <div>
      <Header/>
      <Contact/> 
  </div>
</template>

<script>
import Contact from "../components/organisms/Contact.vue"
import Header from "../components/organisms/Header.vue"
export default {
  name: "ContactPage",
  components: {
   Contact,
   Header,
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

