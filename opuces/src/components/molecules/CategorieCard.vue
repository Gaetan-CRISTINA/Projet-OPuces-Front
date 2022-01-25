<template>
    <div class="category-card-tag">
      <p>Décoration</p>
    </div>
</template>

<script>

export default {
  name: "CategorieCard",
  components: {
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/main";
.category-card-tag {
  display:inline-block;
  background-color: $light-yellow;
  padding: 0.3em 0.8em;
  border-radius: 20px;
  margin-right: .5em;
  margin-bottom: .5em;
  & p {
    font-size: 10px;
    font-weight: 700;
  }
}
</style>

