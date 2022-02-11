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
      storage.unset('searchQueries');
      storage.unset('searchQuery');
      storage.unset('ClassifiedToUpdate');
      storage.unset('UserInfos');
      this.$router.push({name:"Home"})  
  }
}
</script>
