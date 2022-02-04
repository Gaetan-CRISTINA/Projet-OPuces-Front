<template>
  <div>
      <PictoUser/>

  <form class="contact-form" action="">
  <label for="tel">Prendre une photo</label>
  <input type="text" id="tel" name="tel" value="">
  <label for="adresse">Uploader une photo</label>
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

