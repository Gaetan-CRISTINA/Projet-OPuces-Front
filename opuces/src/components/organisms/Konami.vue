<template>
  <div class="konami-container">
      
  </div>
</template>

<script>
export default {
  name: "Konami",
  components: {
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/main";
  .konami-container {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 99999;
    background-color: #fff;
    width: 100%;
    height: 1000%;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-animation: animbackground .5s 0s infinite;
            animation: animbackground .5s 0s infinite; 
  }
@-webkit-keyframes animbackground
{
    0%  {   background-color: #fff; }
    20% {   background-color: red; }
    30% {   background-color: blue; }
    40% {   background-color: black; }
    50% {   background-color: green; }
    60% {   background-color: yellow; }
    70% {   background-color: magenta; }
    80% {   background-color: pink; }
    90% {   background-color: orange; }
}
  
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

