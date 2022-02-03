<template>
<div><Header2 />
<div class="illusLamp">
    <IllusLamp />
    </div>
 <div class="main-container">
    
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

          <button class="--button connect">
            ENREGISTRER LES MODIFICATIONS
          </button>
        </form>
      </div>
    </div>
</div>
 </div>
</template>

<script>

import storage from "../plugins/storage";
import userService from "../services/userService";
import Header2 from "../components/organisms/Header2.vue"
import IllusLamp from "../components/atoms/IllusLamp.vue"
export default {
  name: 'Myaccount',
  components: {
      Header2,
      IllusLamp

  },
  data(){
    return{
    username: '',
    usernameEmpty: false,
    newPassword: '',
    newPasswordEmpty: false,
    email: '',
    emailEmtpy: false,
    newPasswordVerify: '',
    newPasswordTooShort: false,
    newPasswordVerifyEmpty: false,
    newPasswordConfirm: false,
    
    }
  },
methods: {
  async handleSubmit(event){
    event.preventDefault();
    if(this.username == ""){
              this.usernameEmpty = true;
          }
          if(this.email == ""){
              this.emailEmpty = true;
          }
          if(this.password == ""){
              this.passwordEmpty = true;
          }
          if(this.newPasswordVerify == ""){
              this.newPasswordVerifyEmpty = true;
          }
          if(this.newPassword.length < 8){
              this.newPasswordTooShort = true;
          }
          if(this.newPassword !== this.newPasswordVerify){
              this.passwordConfirm= true;
          }

          const userData = storage.get('userData');
          if(userData != null){
            const token = userData.token;
            if(userService.checkUser(token)){
              return true;
            }
            else{
              return false;
            }

          }

          if (
            !this.usernameEmpty &&
            !this.emailEmpty &&
            !this.newPasswordEmpty &&
            !this.newPasswordVerify &&
            !this.newPasswordTooShort &&
            !this.newPasswordConfirm &&
            this.userData == true

          )
          {
            console.log('Mise à jour du USER');
            let result = await userService.updateUser(
              this.newPassword,
              this.newPasswordVerify,
              this.username,
              this.email
            );
            console.log(result);
            if(result){
              if(result.success == true){
                this.$router.push({name: 'Home'});
              }
            }
          }


  }
}
  
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
}
.main-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  margin-top: 7rem;
}
.illusLamp {
  display: none;
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