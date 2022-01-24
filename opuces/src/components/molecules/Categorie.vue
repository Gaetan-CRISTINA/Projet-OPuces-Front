<template>
  <div class="container-category">
    <div class="category-tag">
      <p>Décoration</p>
      <PictoRemove />
    </div>
  </div>
</template>

<script>
import PictoRemove from "../atoms/PictoRemove.vue";

export default {
  name: "Categorie",
  components: {
    PictoRemove,
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/main";

.container-category {
    display: inline-block;
    cursor: pointer;
}
.category-tag {
  display: flex;
  align-items: center;
  background-color: $light-yellow;
  padding: 0.3em 0.8em;
  border-radius: 20px;
  margin-right: .5em;
  margin-bottom: .5em;
  & p {
    font-size: 10px;
    font-weight: 700;
    padding-right: 1em;
  }
}
#picto-remove {
  width: 10px;
  height: 10px;
}
</style>

