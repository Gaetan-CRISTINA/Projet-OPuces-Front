<template>
  <div>
    <label class="name-label">
      <svg class="icon">
        <use xlink:href="#icon-search"></use>
      </svg>
      <form @submit="handleSearch">
      <input v-model="searchQuery" type="text" placeholder="Rechercher" />
      </form>
    </label>

    
  </div>
</template>

<script>
import storage from "../../plugins/storage";

export default {
  data() {
    return{
      searchQuery: "",
      selectedItem: null,
      classifiedsArray: [],
    };
  },
  methods: {
    async handleSearch(event){
      event.preventDefault();
      this.searchQuery = storage.set('searchQuery', this.searchQuery);
      
      this.$router.push({ name : 'SearchClassifiedsList'});
    }
  },

}
  
</script>

<style scoped lang="scss">
@import "../../assets/scss/main";

@media screen and (min-width: 576px) {
}

@media screen and (min-width: 768px) {
}

@media screen and (min-width: 992px) {
  label {
    position: relative;
    
  }
  input {
    width: 195px;
    height: 38px !important;
    border: none;
    background-color: $light-grey;
    border-radius: 6px;
  }
  input:focus {
    outline: $text-color;
  }
  label > .icon {
    position: absolute;
    top: 70%;
    left: 10px;
    transform: translateY(-50%);
    color: silver;
  }

  label > input {
    padding-left: calc(
      1em + 10px + 8px
    ); /* icon width + icon padding-left + desired separation*/
    height: 2em;
  }

  /*
  SVG SpriteSheet
*/

  .spritesheet {
    display: none;
  }

  .icon {
    display: inline-block;
    width: 1em;
    height: 1em;
    stroke-width: 0;
    stroke: currentColor;
    fill: currentColor;
  }
}
@media screen and (min-width: 1200px) {
  input {
    width: 375px;
  }
}
@media screen and (min-width: 1400px) {
  input {
    width: 556px;
  }
}
</style>

