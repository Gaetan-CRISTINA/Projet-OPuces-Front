<template>
  <div
  v-on:click="displayColumn"
  id="picto-display2"
  >
      <svg 
        style="fill: #484848;"
        width="23.613"
        height="21.797"
        slot="" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 21.322 21.322">
        <path class="a" d="M0,0V8H8V0ZM13.326,0V8h8V0ZM0,13.326v8H8v-8Zm13.326,0v8h8v-8Z"/>
      </svg>
  </div>
</template>

<script>
export default {
  name: 'PictoDisplay2',
  methods: {
    displayColumn: function(evt){
          evt.preventDefault();
          this.$emit('displayColumnHome', evt);
      }
  },
}
</script>

<style scoped lang="scss">
div {
  height: 21.8px;
  width: 21.8px;
  cursor: pointer;
}
svg:hover {
  transition: all .3s;
  fill: #2093A7 !important;
}
</style>

