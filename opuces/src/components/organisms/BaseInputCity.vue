<template>
  <section class="dropdown-wrapper">
    <div @click="isVisible = !isVisible" class="selected-item">
      <!-- if there's a selected item display selected item by name -->
      <span v-if="selectedItem">{{ selectedItem.nom }}</span>
      <!-- otherwise display this -->
      <span v-else>Saisissez une ville</span>
      <svg 
      :class="isVisible ? 'dropdown' : ''"
      class= "drop-down-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 10.828l-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z"/></svg>
    </div>
    <div :class="isVisible ? 'visible' : 'invisible'" class="dropdown-popover">
      <input v-model="searchQuery" type="text" placeholder="Villes">
      <span v-if="filteredCity.length == 0">Ville introuvable</span>
      
      
      <div class="">
        <ul>
          <!-- selectItem is a method -->
          <!-- filteredUser is computed function -->
          <li @click="selectItem(city)" v-for="(city, index) in filteredCity" :key="`city-${index}`">
            {{ city.nom }}
          </li>
          
        </ul>
       </div> 
      
    </div>
  
  </section>  
    
</template>


<script>
export default {
  data() {
    return{
      searchQuery: "",
      selectedItem: null,
      isVisible: false,
      cityArray: [],
    };
  },

  computed: {
    filteredCity() {
      // if the input is empty return the array
      const query = this.searchQuery.toLowerCase()
      if(this.searchQuery == "") {
        return this.cityArray;
      }
      // checking what you are typing in the input
      return this.cityArray.filter((city) => {
        return Object.values(city).some((word) => String(word).toLowerCase().includes(query)
        );
      });
    },
  },

  mounted() {
    fetch("https://geo.api.gouv.fr/communes/")
    .then(res => res.json())
    .then((json) => {
      console.log(json);
      this.cityArray = json;
    })
  },

  methods: {
    selectItem(city){
      this.selectedItem = city;
      this.isVisible = false
    },
  },
  

}
</script>
<style scoped lang="scss">
.dropdown-wrapper {
  max-width: 250px;
  position: relative;
  margin: 0;
  
}

.selected-item {
  height: 40px;
  border: 2px solid #159ba0;
  border-radius: 5px;
  margin-bottom: 30px;
  padding: 8px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
}

.dropdown-popover {
  position: absolute;
  border: 2px solid #159ba0;
  max-width: 100%;
  padding: 20px;
  top: 36px;
  left: 0;
  right: 0;
  background-color: white;
  width: 100%;
  visibility: hidden;
  /*transition: all 0.5s linear;*/
  max-height: 0px;
  overflow: hidden;
  z-index:10;
  &.visible {
    max-height: 450px;
    visibility: visible;
  }
}

input {
  width: 100%;
  height: 30px;
  border: 2px solid #159ba0;
  font-size: 14px;
  padding-left: 5px;
}

.options {
  width: 100%
}

ul {
  list-style: none;
  text-align: left;
  max-height: 200px;
  overflow-y: scroll;
  overflow-x: hidden;
}

li {
  width: 100%;
  border-bottom: 1px solid #159ba0;
  padding: 10px;
  background-color: lightgrey;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    background: #159ba0;
    color: #fff;

  }

}

.drop-down-icon {
  transform: rotate(0deg);
  transition: all 0.5s ease;
  &.dropdown {
    transform: rotate(180deg);
  }
}


.drop-down-icon.dropdown {
  transform: rotate(180deg);
  transition: all 0.5s ease;
}



</style>
