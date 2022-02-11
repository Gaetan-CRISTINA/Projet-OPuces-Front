<template>
<div>
  <Header2 />
  <div class="illusLamp">
      <IllusLamp />
    </div>
    <div class="PageLoginMobile">
      <PageLoginMobile/>
      </div>
</div>   
</template>

<script>
import PageLoginMobile from '../components/organisms/PageLoginMobile.vue'
import Header2 from '../components/organisms/Header2.vue'
import IllusLamp from '../components/atoms/IllusLamp.vue'
export default {
  name: 'LoginForm',
  components: {
    PageLoginMobile,
    Header2,
    IllusLamp
  }
}
</script>

<style scoped lang="scss">
@import "../assets/scss/main";
.PageLoginMobile{
  padding-top: 8rem;
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