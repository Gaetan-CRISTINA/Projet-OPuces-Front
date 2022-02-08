<template>
<div>
<Header2 />
  <LegalNotice/>
  
</div> 

      
   
</template>

<script>
import LegalNotice from '../components/organisms/LegalNotice.vue'
import Header2 from '../components/organisms/Header2.vue'

export default {
  name: 'MentionsLegales',
  components: {
    LegalNotice,
    Header2
   
  }
}
</script>
<style scoped lang="scss">

@import "../assets/scss/main";
.title-cgu-container p {
  color: $main-green;
  font-weight: 900;
    font-size: 18px;
}

</style>