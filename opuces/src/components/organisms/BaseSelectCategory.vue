<template>
  <section class="dropdown-wrapper">
    <div @click="isVisible = !isVisible" class="selected-item">

      <!-- if there's a selected item display selected item by name -->
      <span v-if="selectedItem">{{ selectedItem.name }}</span>
      <!-- otherwise display this -->
      <span v-else>Choisissez une categorie</span>

      <!-- animated icon arrow up and down for drop down menu -->
      <svg 
      :class="isVisible ? 'dropdown' : ''"
      class= "drop-down-icon" 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      width="24" 
      height="24">
      <path fill="none" d="M0 0h24v24H0z"/>
      <path d="M12 10.828l-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z"/>
      </svg>
      <!--  end of animated icon arrow up and down for drop down menu -->

    </div>

    <!--  To toggle (hide and show) the dropdown menu categories -->
    <div :class="isVisible ? 'visible' : 'invisible'" class="dropdown-popover">
      

      <!--
      <input v-model="searchQuery" type="text" placeholder="Search for categories">
      <span v-if="filteredUser.length == 0">No category found</span>
      -->
      
      
      <div class="">
        <ul>
          <!-- selectItem is a method -->
          <!-- filteredUser is computed function -->
          <li 
          @click="selectItem(category)" 
          v-for="(category, index) in filteredCategory" 
          :key="`user-${index}`"
          >
          {{ category.name }}
          </li>
          
        </ul>
       </div> 
      
    </div>
  
  </section>  
    
</template>


<script>
import classifiedsService from "../../services/classifiedsService";

export default {
  data() {
    return{
      searchQuery: "",
      selectedItem: null,
      isVisible: false,
      categoryArray: []
    };
  },

  computed: {
    filteredCategory() {
      // if the input is empty return the array
      const query = this.searchQuery.toLowerCase()
      if(this.searchQuery == "") {
        return this.categoryArray;
      }
      // checking what you are typing in the input
      return this.categoryArray.filter((category) => {
        return Object.values(category).some((word) => String(word).toLowerCase().includes(query)
        );
      });
    },
  },
  
  async created(){
    this.categoryArray = await classifiedsService.loadClassifiedProductCategory();
  },

  methods: {
    selectItem(category){
      this.selectedItem = category;
      this.isVisible = false
    },
  },
  

}
</script>
<style scoped lang="scss">
@import "../../assets/scss/main";

 .filters-desktop {
    display: block;
  }
.filters-desktop {
    position: fixed;
    margin-left: 30px;
    width: 420px;
}

.dropdown-wrapper {
  max-width: 100%;
  position: relative;
  margin: 0;
  
}

.selected-item {
  height: 40px;
  border-radius: 5px;
  margin-bottom: 30px;
  padding-left: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  background-color: $light-grey;
}

.dropdown-popover {
  position: absolute;
  border: 1px solid $light-grey;
  max-width: 100%;
  padding: 20px;
  top: 36px;
  left: 0;
  right: 0;
  background-color: $light-grey;
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

  select {
    width: 100%;
    border: 0;
    padding-bottom: 1em;
    border-bottom: solid 1px $text-color;
    margin-bottom: 1em;
    font-size: 14px;
    cursor: pointer;
    background-color:white;
  }
  select:focus {
    outline: 0;
  }
  .add {
    font-size: 22px !important;
  }
  .input-filters {
    padding-bottom: 2em;
  }
  label,
  input {
    display: block;
  }
  input {
    height: 38px;
    width: 100%;
    border: none;
    border-radius: 6px;
    margin-bottom: 1em;
    background-color: $light-grey;
    text-indent:25px
  }
  #ville {
    background: url("../../assets/svg/picto-location.svg"), $light-grey;
    background-repeat: no-repeat;
    background-size: 12px 17px;
    background-position: 10px 10px;
  }
  label {
    font-size: 14px !important;
    color: $text-color;
    padding-bottom: 7px;
  }
  .input-price {
    display: flex;
    justify-content: space-between;
  }
  .input-price input {
    width: 200px;
  }
  .input-price input::placeholder,
  .input-filters input::placeholder {
    font-style: italic;
    padding-left: 1em;
  }
  .save-search {
      display: flex;
      justify-content: space-between;
      align-items: center;
  }
  #savesearch {
      margin-top: 7px;
  }  
  /* The switch - the box around the slider */
  .switch {
    position: relative;
    display: inline-block;
    width: 39px;
    height: 21.5px;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: $light-grey;
    border: solid 1px $text-color;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 14px;
    width: 14px;
    left: 3px;
    bottom: 3px;
    background-color: $text-color;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: $light-green;
    border: solid 1px $main-green;
  }
  input:focus + .slider {
    box-shadow: 0 0 1px $main-green;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(18px);
    -ms-transform: translateX(18px);
    transform: translateX(18px);
    background-color: $main-green;
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
  .search-validate {
      display: block;
      width: 100%;
      height: 38px;
      background-color: $main-green;
      border-radius: 20px;
      border: none;
      font-weight: 600;
      color: #fff;
      cursor: pointer;
      transition: all .3s;
  }
  .search-validate:hover {
    background-color: $secondary-green;
  }

@media screen and (min-width: 1200px) {
}
@media screen and (min-width: 1400px) {
}


</style>
