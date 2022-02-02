<template>
<div>
<Header/>
<div class="main-container">
<PasswordEdit/>
<div class="right">
        <div class="IllusPlane">
          <img src="../assets/svg/Groupe-277.svg" alt="" />
        </div>
      </div>
   </div>
   </div>
</template>

<script>
import PasswordEdit from "../components/organisms/PasswordEdit.vue"
import Header from "../components/organisms/Header.vue";
export default {
  name: 'UpdatePassword',
  components: {
   PasswordEdit,
  Header
  }
}
</script>

<style scoped lang="scss">

@media screen and (min-width: 576px) {
  
}
@media screen and (min-width: 768px) {
  
}
@media screen and (min-width: 992px) {

}
@media screen and (min-width: 1200px) {

}
@media screen and (min-width: 1400px) {
}
</style>