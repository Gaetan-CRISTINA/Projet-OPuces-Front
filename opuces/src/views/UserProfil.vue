<template>
<div>
  <router-link
  :to="{
    name: 'Home'
    }"
    >
      <div id="left-header-mobile">
        <span><Logo /></span>
        <h2>O'Puces</h2>
      </div>
  </router-link>
    <div>
     <UserProfilMobile/> 
    </div>  
</div>
  
 
 
</template>

<script>

import UserProfilMobile from '../components/organisms/UserProfilMobile.vue'
import Logo from "../components/atoms/Logo.vue";

export default {
  name: 'UserProfil',
  components: {
    Logo,
    UserProfilMobile
    
  }
}
</script>

<style scoped lang="scss">

.main-container {
  position: absolute;
  top: 130px;
}
#left-header-mobile{
  display: inline-block;
  margin: 15px 0 15px 15px;

}
#left-header-mobile span{
  justify-content: flex-start;
}
</style>