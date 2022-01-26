<template>
  <div class="liste-categories-annonce content-annonce">
    <CategorieCard />
    <CategorieCard />
    <CategorieCard />
  </div>
</template>

<script>
import CategorieCard from "../molecules/CategorieCard.vue";

export default {
  name: "CategorieCardList",
  components: {
      CategorieCard,
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/main";

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

