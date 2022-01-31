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
    <h1>Mon Compte</h1>
    
    <ul>Ici je peux
        <li>changer mes coordonnées (email)</li>
        <li>changer mes infos perso (nom, prénom)</li>
        <li>changer de mot de passe</li>
    </ul>
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
</style>