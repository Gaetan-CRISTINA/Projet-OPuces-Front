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
