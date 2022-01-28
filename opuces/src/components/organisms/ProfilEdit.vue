<template>
  <div>
      <PictoUser/>

  <form class="contact-form" action="">
  <label for="Name">Nom</label>
  <input type="text" id="fname" name="fname" value="">
  <label for="Mail">Mail</label>
  <input type="email" id="Mail" name="Mail" value="">
  <label for="tel">telephone</label>
  <input type="text" id="tel" name="tel" value="">
  <label for="adresse">adresse</label>
  <input type="text" id="Message" name="Message" value="">
  <input type="submit" value="Eregistrer les modifications">
</form> 

  </div>
</template>

<script>
import PictoUser from "../atoms/PictoUser.vue"
export default {
  name: "ProfilEdit",
  components: {
   PictoUser
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/main";

.contact-form {
    display:flex;
    flex-direction: column;
    width:50%;
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

