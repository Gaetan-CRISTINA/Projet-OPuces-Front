<template>
 <h1>DeleteClassified</h1>
</template>

<script>

import classifiedsService from '../services/classifiedsService';
import storage from '../plugins/storage';

export default {
  name: 'DeleteClassified',
  components: {

  },
  created(){
      this.id = storage.get('ClassifiedToDelete');
      console.log(this.id);
      classifiedsService.deleteCurrentClassified(this.id); 
      storage.unset('ClassifiedToDelete');
      this.$router.push({name:"UserClassifieds"})  
  }
}
</script>
