<template>
 <h1>User Logout</h1>
</template>

<script>
import storage from '../plugins/storage.js';


export default {
  name: 'logout',
  components: {

  },
  created(){
      storage.unset('userData');
      storage.unset('ClassifiedIdCart')
      storage.unset('UserIdLogged')
      this.$router.push({name:"Home"})  
  }
}
</script>
