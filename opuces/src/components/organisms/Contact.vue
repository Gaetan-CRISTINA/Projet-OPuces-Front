<template>
  <div>
    <h1>CONTACT</h1>
    <form class="contact-form" action="">
      <label for="Name">Nom</label>
      <input type="text" id="fname" name="fname" value="" />
      <label for="Sujet">Sujet</label>
      <input type="text" id="Sujet" name="Sujet" value="" />
      <label for="Mail">Mail</label>
      <input type="email" id="Mail" name="Mail" value="" />
      <label for="Message">Message</label>
      <input type="text" id="Message" name="Message" value="" />
      <input type="submit" value="Envoyer le message" />
    </form>

    <div>
      <p>Bonjour XXX, que pouvons nous faire pour vous ?</p>
      <h4>Votre demande concerne :</h4>
      <select name="" id="">
        <option value="0">Choisir un sujet</option>
        <option value="1">michel</option>
        <option value="2">michel</option>
        <option value="3">michel</option>
        <option value="4">michel</option>
        </select>
        <form action="">
          <label for="Message">Message</label>
          <input type="text" id="fname" name="fname" value="" />
          <input type="submit" value="Envoyer le message" />
        </form>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  components: {},
};
</script>

<style lang="scss">
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

