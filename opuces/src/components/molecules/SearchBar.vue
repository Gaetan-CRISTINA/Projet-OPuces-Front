<template>
  <div>
    <label class="name-label">
      <svg class="icon">
        <use xlink:href="#icon-search"></use>
      </svg>
      <!--  computed function for when you start entering a value on the input, it starts searching at the same time --> 
      <input v-model="searchQuery" type="text" placeholder="Rechercher" />
      <!-- if there's a selected item display selected item by name -->
      <span v-if="selectedItem">{{ selectedItem.id }}</span>
      <!-- and if it doesn't find what you're searching for, it will say... -->
      <span v-if="filteredClassified.length == 0">Recherche introuvable</span>
    </label>

    <svg class="spritesheet">
      <symbol id="icon-search" viewBox="0 0 32 32">
        <title>search</title>
        <path
          class="cls-1"
          d="M15.73,15.24a9,9,0,1,0-.72.7l4.83,4.6.69-.72ZM1,9.07a8.08,8.08,0,1,1,8.07,8.08A8.08,8.08,0,0,1,1,9.07Z"
        />
      </symbol>
    </svg>
  </div>
</template>

<script>
import classifiedsService from "../../services/classifiedsService";

export default {
  data() {
    return{
      searchQuery: "",
      selectedItem: null,
      classifiedsArray: [],
    };
  },

  
  // filter function for search city
  computed: {
    filteredClassified() {
      // if the input is empty return the array
      const query = this.searchQuery.toLowerCase()
      if(this.searchQuery == "") {
        return this.classifiedsArray;
      }
      // checking what you are typing in the input
      return this.classifiedsArray.filter((classified) => {
        return Object.values(classified).some((word) => String(word).toLowerCase().includes(query)
        );
      });
    },
  },

  async created(){
    this.classifiedsArray = await classifiedsService.loadClassified();
  },

  methods: {
    selectItem(classified){
      this.selectedItem = classified;
    },
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

