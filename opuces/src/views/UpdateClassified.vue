<template>
  <div>
    <Header2 />
    <div class="illusLamp">
      <IllusLamp />
      <h1>Update Classified</h1>
    </div>
  </div>
</template>

<script>
import Header2 from "../components/organisms/Header2.vue";
import IllusLamp from "../components/atoms/IllusLamp.vue";


export default {
  name: 'UpdateClassified',
  components: {
    Header2,
    IllusLamp
    
  },
  created(){
      this.id = this.$route.params.id;
  }
};
</script>

<style scoped lang="scss">
@import "../assets/scss/main";

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
