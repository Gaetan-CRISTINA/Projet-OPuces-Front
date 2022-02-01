<template>
 <div class="main-container">
    <div class="headerLink">
      <router-link
        :to="{
          name: 'Home',
        }"
      >
        <div id="left-header-mobile">
          <span><Logo /></span>
          <h2>O'Puces</h2>
        </div>
      </router-link>
    </div>
    <div class="connexion">
      <div class="left">
        <form @submit="handleSubmit">
          <h6>Nom d'utilisateur</h6>
          <input
            v-model="username"
            type="text"
            name="username"
            class="username"
            placeholder=""
          />
          <div class="error" v-if="usernameEmpty">
            Vous devez saisir un nom d'utilisateur
          </div>

          <h6>Email</h6>
          <input v-model="email" type="email" name="email" class="email" />
          <div class="error" v-if="emailEmpty">Vous devez saisir un email</div>

          <h6>Nouveau mot de passe</h6>
          <label class="eye-label">
            <input
              v-model="newPassword"
              type="password"
              name="password"
              class="password"
              placeholder=""
            />
          </label>
          <div class="error" v-if="newPasswordEmpty">
            Vous devez saisir un password
          </div>
          <div class="error" v-if="newPasswordTooShort">
            Le mot de passe doit faire 8 caractères au minimum
          </div>

          <h6>Confirmation du mot de passe</h6>
          <label class="eye-label">
            <input
              v-model="newPasswordVerify"
              type="password"
              name="password"
              class="password"
            />
          </label>
          <div class="error" v-if="newPasswordVerifyEmpty">
            Vous devez saisir un password
          </div>
          <div class="error" v-if="newPasswordConfirm">
            Les mots de passe ne correspondent pas.
          </div>

          <button href="#" class="--button connect">
            ENREGISTRER LES MODIFICATIONS
          </button>
        </form>
      </div>
    </div>

 </div>
</template>

<script>
import Logo from "../components/atoms/Logo.vue";


export default {
  name: 'Myaccount',
  components: {
      Logo,

  },
  
}
</script>

<style scoped lang="scss">
@import "../assets/scss/main.scss";

.headerLink {
  display: flex;
  justify-content: space-between;
  margin: 20px;
}
.connexion {
  width: 50%;
  padding-right: 15px;
  padding-left: 15px;
  margin: auto;
  border: 15px;
  //   border: 2px solid yellow;
}
.main-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  //   border: 2px solid red;
  position: absolute;
}
</style>