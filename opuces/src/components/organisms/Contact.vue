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

    <div v-if="user">
      <p>Bonjour {{user.user_nicename}}, que pouvons nous faire pour vous ?</p>
      <h4>Votre demande concerne :</h4>
      <select name="" id="">
        <option value="0">Choisir un sujet</option>
        <option value="1">Demande d'informations</option>
        <option value="2">Réclamation</option>
        <option value="3">Question générale sur le site</option>
        <option value="4">J'ai un problème ?</option>
        </select>
        <form action="">
          <label for="Message">Votre message</label>
          <input type="text" id="fname" name="fname" value="" />
          <button type="submit">Envoyer le message</button>
        </form>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  components: {

  },
  computed: {
    user(){
    this.$store.state.user;
    return this.$store.state.user;
    }
  }
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

