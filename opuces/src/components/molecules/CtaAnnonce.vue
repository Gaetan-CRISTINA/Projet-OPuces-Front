<template>
    <div class="CTA-annonces">
        <button id="acheter">ACHETER</button>
        <button id="contacter">CONTACTER</button>
    </div>
</template>

<script>
export default {
  name: "CtaAnnonce",
  components: {
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/main";
.CTA-annonces {
    padding-top: .5em;
    display: flex;
    justify-content: space-between;
}
button {
    width: 48%;
    height: 38px;
    border-radius: 22px;
    border: none;
    font-weight: 600;
    transition: all .3s;
    cursor: pointer;
}
#acheter {
    color: #fff;
    background-color: $main-green;
}
#acheter:hover {
    background-color: $secondary-green;
}
#contacter {
    color: $main-green;
    background-color: #fff;
    border: solid 1px $main-green;
}
#contacter:hover {
    color: $secondary-green;
    border: solid 1px $secondary-green;
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

