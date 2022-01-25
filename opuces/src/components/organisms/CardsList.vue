<template>
    <div class="cards-list">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
</template>

<script>
import Card from "../molecules/Card.vue";
export default {
  name: 'CardsList',
  components: {
      Card,
  },
}
</script>

<style scoped lang="scss">
@import '../../assets/scss/main';

.cards-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
@media screen and (min-width: 576px) {
    
}
@media screen and (min-width: 768px) {
    
}
@media screen and (min-width: 992px) {
    .cards-list {
        width: 520px;
    }
}  
@media screen and (min-width: 1200px) {
    .cards-list {
        width: 700px;
    }
}
@media screen and (min-width: 1400px) {
    .cards-list {
        width: 880px;
    }
}
</style>

