<template>
  <div class="main-container">
    <div class="connexion">
      <div class="left">
        <form>
          <h6>Nom</h6>
          <input
            v-model="username"
            type="text"
            name="username"
            class="username"
          />

          <h6>Email</h6>
          <input v-model="email" type="email" name="email" class="email" />

          <h6>Mot de passe</h6>
          <label class="eye-label">
            <input
              v-model="password"
              v-html="test"
              type="password"
              name="password"
              class="password"
            />
          </label>

          <h6>Confirmation du mot de passe</h6>
          <label class="eye-label">
            <input
              v-model="passwordVerify"
              type="password"
              name="password"
              class="password"
            />
          </label>

          <button href="#" class="--button connect">ENREGISTRER LES MODIFICATIONS</button>
        </form>
      </div>
    </div>
    <div class="userDashboard">
        <h6>Annonces en ligne</h6> 
        
      <span></span>
      
        <h6>Annonces en attente</h6> 
      <span></span>
      
        <h6>Messages en attente</h6> 
      <span></span>
      
        <h6>Annonces supprimées</h6> 
      <span></span>
      
    </div>
  </div>
</template>



<script>


export default {
  name: "UserPRofilMobile",
  components: {
   
  },
  props: {
    user: Object,
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/main.scss";

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
//   border: 2px solid red;
  position: absolute;
}
.userDashboard {
  width: 50%;
//   border: 2px solid green;
  display: flex;
  flex-direction: column;
}
.userDashboard span{
    background-color: $light-grey;
    border-radius: 5px;
    padding: 10px;
    margin: 0px 15px;
    height: 100px;
    width: auto;
    height: 38px;
    border: none;
    border-radius: 6px;
}
.userDashboard h6{
    align-self: flex-start;
    margin: 8px;
    
}

.main-container h6 {
  align-self: flex-start;
  margin: 8px;
  
}

form {
  width: 100%;
}
.--button {
  border-radius: 19px;
  padding: 1px;
  width: 345px;
  height: 38px;
  color: white;
  width: 100%;
  border: none;
  margin: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 900px;
}
h6 {
  padding: 15px 0 15px 0;
}
input {
  width: 100%;
  height: 38px;
  border: none;
  background-color: $light-grey;
  border-radius: 6px;
}
.connect {
  background-color: $main-green;
  margin: 28px 0 38px 0;
}

input:focus {
  outline: $text-color;
}

@media screen and (min-width: 576px) {
}
@media screen and (min-width: 768px) {
    .main-container {
      width: 100%;
    }
}
@media screen and (min-width: 992px) {
    .main-container {
      width: 960px;
    }
}
@media screen and (min-width: 1200px) {
    .main-container {
      width: 1200px;
    }
  
  
}
@media screen and (min-width: 1400px) {
 
}
</style>