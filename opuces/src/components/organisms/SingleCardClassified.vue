<template>
  <div>
    <Header />
    <div class="main-container">
      
          
        <Card />
        <div class="v">
          <router-link
            :to="{
              name: 'Home',
            }"
          >
            <button>Retouner vers la page d'accueil</button>
          </router-link>
        </div>
      </div>
    
  </div>
</template>

<script>
import Card from "../molecules/Card.vue";
import Header from "../organisms/Header.vue";

export default {
  name: "SingleCardclassified",
  components: {
    Card,
    Header,
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/main";
.main-container {
  position: relative;
  top: 70px;
}
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

