<template>
  <div class="voir-plus">
    <button
      v-on:click="handleSeeMore"
    >VOIR L'ANNONCE</button>
  </div>
</template>

<script>
export default {
  name: "VoirPlus",
  components: {

  },
  methods: {
    handleSeeMore: function(evt){
          evt.preventDefault();
          this.$emit('displayHideCardContent', evt);
      }
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/main";
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

.voir-plus {
  text-align: center;
}
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

