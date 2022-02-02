<template>
  <div
  v-on:click="displayRow"
  id="picto-display1"
  style="display: none"
  >
      <svg
        style="fill: #484848;"
        width="23.613"
        height="21.797"
        slot=""
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 21 22">
        <g id="Calque_2" data-name="Calque 2"><g id="Calque_1-2" data-name="Calque 1"><g id="Groupe_107" data-name="Groupe 107"><rect id="Rectangle_68" data-name="Rectangle 68" class="cls-1" y="14" width="21" height="8"/><rect id="Rectangle_69" data-name="Rectangle 69" class="cls-1" width="21" height="8"/></g></g></g>
      </svg>
  </div>
</template>

<script>
export default {
  name: 'PictoDisplay1',
  methods: {
    displayRow: function(evt){
          evt.preventDefault();
          this.$emit('displayRowHome', evt);
      }
  },
}
</script>

<style scoped lang="scss">
svg:hover {
  transition: all .3s;
  fill: #2093A7 !important;
  cursor: pointer;
}
</style>

