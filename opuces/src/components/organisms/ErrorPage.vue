<template>
  <div>
    <Header2 />
    <div class="illusLamp">
      <IllusLamp />
    </div>
    <div class="main-container">
      <div class="error-text">
        <span>OUPS !</span>
        <p>
          Il n'y a rien sur cette page, elle a peut-être été supprimée, ou elle
          n'a jamais existé !
        </p>
      </div>
      <div class="error-button">
        <router-link
          :to="{
            name: 'Home',
          }"
        >
          <a href="" class="useless">RETOURNER A L'ACCUEIL</a>
        </router-link>
        <a href="" id="useless2" v-on:click="handleclick"
          >FAIRE UN TRUC INUTILE</a
        >
      </div>
      <div class="svgFlex">
        <div class="svg">
          <img src="../../assets/svg/Quatre.svg" alt="" />
        </div>
        <div class="svg">
          <IllusPlane />
        </div>
        <div class="svg">
          <img src="../../assets/svg/Quatre.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header2 from "../organisms/Header2";
import IllusPlane from "../atoms/IllusPlane";
import IllusLamp from "../atoms/IllusLamp.vue";
export default {
  name: "ErrorPage",
  components: {
    Header2,
    IllusPlane,
    IllusLamp,
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/main";

.error-header {
  display: flex;
  margin: 2em;
  padding: 15px;
}
.error-header svg {
  width: 42px;
  margin-right: 1em;
}
.error-header h2 {
  font-size: 24px;
  font-weight: 900;
  color: $main-green;
}
.error-text {
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
}
.error-text span {
  font-weight: 700;
  font-size: 48px;
}
.error-text p {
  font-weight: 600;
  font-size: 24px;
}
.error-button {
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 3rem;
}
.error-button a {
  margin: 1em;
  padding: 1em;
  border-radius: 19px;
  font-weight: 600;
  font-size: 14px;
}
.useless {
  color: white;
  background-color: $main-green;
}
#useless2 {
  color: $main-green;
  background-color: white;
  border: 2px solid $main-green;
}
.svgFlex {
  display: none;
}

@media screen and (min-width: 576px) {
  .svgFlex {
    display: none;
  }
  .main-container{
  margin-top: 8rem;
}
}
@media screen and (min-width: 768px) {
  .svgFlex {
    display: none;
  }
  .main-container{
  margin-top: 8rem;
}
}
@media screen and (min-width: 992px) {
  .svg img {
    width: 280px;
    padding: 2em;
  }
  .svgFlex {
    display: flex;
    justify-content: center;
    margin: 10%;
  }
  .main-container{
  margin-top: 8rem;
}
}
@media screen and (min-width: 1200px) {
  .error-button {
    display: block;
  }
  .main-container{
  margin-top: 8rem;
}
}
@media screen and (min-width: 1400px) {
  .main-container{
  margin-top: 8rem;
}
}
</style>

