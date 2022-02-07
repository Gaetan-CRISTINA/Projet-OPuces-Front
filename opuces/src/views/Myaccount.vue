<template>
  <div>
    <Header2 />
    <div class="illusLamp">
      <IllusLamp />
    </div>
    <div class="main-container">
      <div class="svg">
        <img src="../assets/svg/illus-computer.svg" alt="" />
      </div>
      <div class="buttons">
        <router-link
          :to="{
            name: 'UpdatePassword',
          }"
        >
          <button class="button btn-edit">
            Mettre à jour mon mot de passe
          </button>
        </router-link>
        <router-link
          :to="{
            name: 'UpdateEmail',
          }"
        >
          <button class="button btn-edit">
            Mettre à jour mon adresse mail
          </button>
        </router-link>
        <router-link
          :to="{
            name: 'UpdateUser',
          }"
        >
          <button class="button btn-edit">
            Mettre à jour mon adresse postale
          </button>
        </router-link>

        <router-link
          :to="{
            name: 'DeleteUser',
          }"
        >
          <button class="button btn-delete">Supprimer mon compte</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Header2 from "../components/organisms/Header2.vue";
import IllusLamp from "../components/atoms/IllusLamp.vue";

export default {
  name: "Myaccount",
  components: {
    Header2,
    IllusLamp,
  },
};
</script>


<style scoped lang="scss">
@import "../assets/scss/main.scss";
.svg {
  width: 50%;
  margin: 0 auto;
  text-align: center;
}
.main-container {
  display: flex;
  flex-direction: column;
  padding-top: 5rem;
}
.illusLamp {
  display: none;
}
.delete:hover {
  background-color: $social-google;
  color: white;
  border: solid 1px $social-google;
}
.buttons>* {
  display: block;
  text-align: center;
}
.button {
  margin: 1em auto;
  border-radius: 19px;
  padding: 1px;
  height: 38px;
  width: 100%;
  max-width: 360px;
  border: none;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}
.btn-edit {
  background-color: $main-green;
  color: white;
}
.btn-edit:hover {
  background-color: $secondary-green;
}
.btn-delete {
  border: solid 1px #DC3645;
  background-color: #fff;
  color: #DC3645;
}
.btn-delete:hover {
  background-color: #DC3645;
  color: #fff;
}

@media screen and (min-width: 576px) {
  .illusLamp {
    display: none;
  }
}
@media screen and (min-width: 768px) {
  .illusLamp {
    display: none;
  }
}
@media screen and (min-width: 992px) {
  .illusLamp {
    display: none;
  }
  .svg img{
    width: 360px;
    padding-left: 0;
    padding-right: 0;
  }
}
@media screen and (min-width: 1200px) {
  .illusLamp {
    display: none;
  }
}
@media screen and (min-width: 1400px) {
  .illusLamp {
    display: inline-block;
    position: fixed;
    margin-left: 6%;
  }
}
</style>