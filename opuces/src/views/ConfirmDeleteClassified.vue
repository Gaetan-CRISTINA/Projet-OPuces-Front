<template>
<div>
<Header2 />
  <div class="illusLamp">
      <IllusLamp />
    </div>
    <div class="main-container">
        
        <div class="display-cart">
            <h2>Voulez-vous vraiment supprimer votre annonce ?</h2>
               
               
               
                <img src="../assets/svg/ConfirmDelete.svg" alt="">
            
            
            
            <div class="button">

            <button class="--button connect" @click="handleUnset">
               
                     Ne pas supprimer mon annonce
                </button>
                <router-link
                
                :to="{
                    name: 'deleteClassified'}
                    ">
                    <button class="delete">
               
                     Supprimer mon annonce
                </button>
                </router-link>

          
                
            </div>
        </div>
    </div>
</div> 
</template>

<script>

import Header2 from '../components/organisms/Header2.vue'
import IllusLamp from '../components/atoms/IllusLamp.vue'
import storage from '../plugins/storage'
export default {
  name: 'ConfirmDeleteClassified',
  components: {
    Header2,
    IllusLamp
   
  },
  methods: {
      async handleUnset(event){
          event.preventDefault();
          storage.unset('ClassifiedToDelete');
          this.$router.push({ name: 'UserClassifieds'});
      }
  }
  
}
</script>

<style scoped lang="scss">
@import "../assets/scss/main";


.display-cart {
    border-radius: 44px;
    -webkit-box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.16);
  -moz-box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.16);
  box-shadow: 0px 3px 9px 0px rgba(0, 0, 0, 0.16);
  margin-top:130px;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
img{
    width: 40%;
    margin-top: 2rem;
}
.main-container {
  display: flex;
  justify-content: space-around;
}
button {
  border-radius: 19px;
  padding: 1px;
  width: 345px;
  height: 38px;
  color: white;
  width: 100%;
  border: none;
  margin-top: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 900px;
  cursor: pointer;
  transition: all .3s;
}
h2{
  text-align: center;
}
button:hover {
  background-color: $secondary-green;
}
.button{
    width: 100%;
}
.connect {
  background-color: $main-green;
}
.delete{
    background-color: #fff;
    color: $social-google;
    border: solid 1px $social-google;
}
.delete:hover {
  background-color: $social-google;
  color: white;
}
@media screen and (min-width: 576px) {
  .illusLamp {
    display: none;
  }
}
@media screen and (min-width: 768px) {

 .illusLamp {
    display: none;
  }
}

@media screen and (min-width: 992px) {
  .illusLamp {
    display: none;
  }
  
}
@media screen and (min-width: 1200px) {
  .illusLamp {
    display: none;
  }
}
@media screen and (min-width: 1400px) {
  .illusLamp {
    display: block;
    position: fixed;
    margin-left: 6%;
  }
}
</style>