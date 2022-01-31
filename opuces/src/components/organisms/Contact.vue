<template>

  <div class="contact">
    <div class="form-contact">
      <h1>CONTACT</h1>
      <form class="contact-form" action="">
        <label for="Name">Nom</label>
        <input type="text" id="fname" name="fname" value="" />
        <label for="Sujet">Sujet</label>
        <input type="text" id="Sujet" name="Sujet" value="" />
        <label for="Mail">Mail</label>
        <input type="email" id="Mail" name="Mail" value="" />
        <label for="Message">Message</label>
        <input type="text" class="Message" name="Message" value="" />
        <input class="--button" type="submit" value="Envoyer le message" />
      </form>
    </div>

    <div class="form-contact">
      
        

      <h1>Bonjour XXX votre demande concerne :</h1>
      
      <form class="contact-form" action="">
      <select name="" id="">
        <option value="0">Choisir un sujet</option>
        <option value="1">michel</option>
        <option value="2">michel</option>
        <option value="3">michel</option>
        <option value="4">michel</option>
      </select>
    
     

      
        <label for="Message">Message</label>
        <input type="text" class="Message" name="Message" value="" />
        <input class="--button" type="submit" value="Envoyer le message" />
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
.form-contact {
  margin: 50px auto;
  padding: 20px;
  border: #2093a7 2px solid;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width:80vh;
}

.--button {
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
  width: 50%;
}
.--button:hover {
  background-color: $main-green;
  color: #fff;
  border: solid 1px $main-green;
}
.Message {
  padding: 0 15rem 10rem 0;
}

input {
  background-color: $light-grey;
  padding: 10px;
  border-radius: 6px;
  border: none;
  color:black;
}
input:focus {
  outline: $text-color;
}
.contact-form select {
    border: 0;
    padding-bottom: 1em;
    border-bottom: solid 1px $text-color;
    margin: 1em;
    font-size: 14px;
    cursor: pointer;
    background-color:white;
  
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

