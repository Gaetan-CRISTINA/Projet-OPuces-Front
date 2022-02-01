<template>
  <div class="main-container">
    <div class="left">
      <div class="infos infos-mobile">
        <h2>Conactez-nous !</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          vitae tellus libero.
        </p>
      </div>
      <form action="">
        <label for="Name">Nom</label>
        <input type="text" id="fname" name="fname" value="" />
        <label for="Sujet">Sujet</label>
        <input type="text" id="Sujet" name="Sujet" value="" />
        <select name="" id="">
          <option value="0">Choisir un sujet</option>
          <option value="1">michel</option>
          <option value="2">michel</option>
          <option value="3">michel</option>
          <option value="4">michel</option>
        </select>
        <label for="Mail">Mail</label>
        <input type="email" id="Mail" name="Mail" value="" />
        <label for="Message">Message</label>
        <textarea name="Message" id="Message" cols="30" rows="10"></textarea>
        <button type="submit">ENVOYER LE MESSAGE</button>
      </form>
    </div>
    <div class="right">
     <div class="infos infos-desktop">
        <h2>Conactez-nous !</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          vitae tellus libero.
        </p>
      </div>
      <img
        class="illus-computer"
        src="../../assets/svg/illus-computer.svg"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  components: {},
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/main";
.infos-desktop {
  display: none;
}
.infos-mobile {
  display: block;
}
.infos{
  padding-top: 2em;
  padding-bottom: 2em;
  text-align: center;
  margin: 0 auto;
  max-width: 33em;
}
h2 {
  color: $main-green;
}
.main-container {
  padding-top: 42px;
}
form {
  margin: 0 auto;
  width: 100%;
}
form > * {
  display: block;
  width: 100%;
}
.right {
  display: none;
}
label {
  font-weight: 600;
  padding-top: 1.5em;
}
input {
  height: 38px;
  background-color: $light-grey;
  border: none;
  border-radius: 6px;
  padding-left: 1em;
}
select {
  padding-top: 1.5em;
  border: 0;
  padding-bottom: 1em;
  border-bottom: solid 1px $text-color;
  margin-bottom: 1em;
  font-size: 14px;
  cursor: pointer;
  background-color: white;
}
input:focus,
select:focus,
textarea:focus {
  outline: none;
}
textarea {
  border-radius: 6px;
  background-color: $light-grey;
  border: none;
  padding-top: 0.5em;
  padding-left: 1em;
}
button {
  margin-top: 2em;
  background-color: $main-green;
  border-radius: 19px;
  padding: 1px;
  height: 38px;
  color: white;
  width: 100%;
  border: none;
  font-size: 14px;
  font-weight: 900px;
  cursor: pointer;
  transition: all 0.3s;
}
button:hover {
  background-color: $secondary-green;
}
@media screen and (min-width: 576px) {
  form {
    max-width: 400px;
  }
}
@media screen and (min-width: 768px) {
}
@media screen and (min-width: 992px) {
  .infos-mobile {
    display: none;
  }
  .infos-desktop {
    display: block;
  }
  .main-container {
    display: flex;
    height: 100vh;
    align-items: center;
  }
  .left {
    width: 50%;
  }
  .right {
    text-align: center;
    width: 50%;
    display: block;
  }
}
@media screen and (min-width: 1200px) {
}
@media screen and (min-width: 1400px) {
}
</style>

