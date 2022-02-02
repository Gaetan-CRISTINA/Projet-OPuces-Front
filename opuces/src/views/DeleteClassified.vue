<template>
 <h1>DeleteClassified</h1>
</template>

<script>

import classifiedsService from '../services/classifiedsService';

export default {
  name: 'DeleteClassified',
  components: {

  },
  created(){
      this.id = this.$route.params.id;
      

      classifiedsService.deleteCurrentClassified(this.id); 
      this.$router.push({name:"UserClassifieds"})  
  }
}
</script>
