<template>
  <div>
    <div class="error-header">
      <span><Logo /></span>
      <h2>O'Puces</h2>
    </div>
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
        name: 'Home'
        }">

      <a href="" class="useless">RETOURNER A L'ACCUEIL</a>

      </router-link>

      <a href="" class="useless2">FAIRE UN TRUC INUTILE</a>
    </div>
  </div>
</template>

<script>
import Logo from "../atoms/Logo";

export default {
  name: "ErrorPage",
  components: {
    Logo,
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
  margin: 4em;
}
.error-text span {
  font-weight: 700;
  font-size:48px;
}
.error-text p {
  font-weight: 600;
  font-size:24px;
}
.error-button {
 display: flex;
  text-align: center;
  align-items:center;
  justify-content: center;
  flex-direction:column; 
}
.error-button a {
  margin: 1em;
  width: 50%;
  padding: 1em;;
  border-radius:19px;
  font-weight:600;
  font-size:14px;
}
.useless {
  color:white;
  background-color:$main-green;
  
}
.useless2 {
  color:$main-green;
  background-color:white;
  border:2px solid $main-green;
  
}
@media screen and (min-width: 576px) {
}
@media screen and (min-width: 768px) {
}
@media screen and (min-width: 992px) {

@media screen and (min-width: 1200px) {
  }.error-button {
 display: block;
   
}
}
@media screen and (min-width: 1400px) {
}
</style>

