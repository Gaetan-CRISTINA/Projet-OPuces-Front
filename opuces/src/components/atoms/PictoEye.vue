<template>
  <div 
  v-on:click="showHideText"
  >
    
      <svg class="picto-eye" style="fill: #484848;" width="23.613" height="21.797" slot="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.431 11.885"><path class="a" d="M10.215,6.75A9.371,9.371,0,0,0,1.5,12.692a9.363,9.363,0,0,0,17.431,0A9.371,9.371,0,0,0,10.215,6.75Zm0,9.9a3.962,3.962,0,1,1,3.962-3.962A3.963,3.963,0,0,1,10.215,16.654Zm0-6.339a2.377,2.377,0,1,0,2.377,2.377A2.374,2.374,0,0,0,10.215,10.315Z" transform="translate(-1.5 -6.75)"/></svg>

    
  </div>
</template>

<script>
export default {
  name: 'PictoEye',
  methods: {
    showHideText: function(evt){
          evt.preventDefault();
          this.$emit('displayHidePassword', evt);
      }
  },
}
</script>

<style scoped lang="scss">
svg:hover {
  cursor:pointer;
}
</style>

