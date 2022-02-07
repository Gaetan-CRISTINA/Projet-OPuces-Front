<template>
  <div class="filters-desktop">
    <form class="input-filters" @submit="processForm" >
      <div class="input-filters">

        <!-- Select a category -->
        <label for="name">Choisissez une categorie</label>
        <select v-model="selectedCategory">
          <option @click="selectItem(category)" 
          v-for="(category, index) in filteredCategory" 
          :key="`user-${index}`"
          >
          {{ category.name }}
          </option>
        </select>
       </div> 
      
        <!-- Enter city -->
        <div>
          <label for="name"> Saisissez une ville </label>
        <input 
        type="text" 
        placeholder="Villes" 
        class="selected-item"
        v-model="city"
        >
      
      </div>

        <!-- Enter price -->

        <div>
          <label for="name"> {{title}} </label>
        </div>

        <div class="input-price">
          <input placeholder="Min" type="text" id="minAmount" name="user_name" v-model="priceMin" /> 
          <input placeholder="Max" type="text" id="maxAmount" name="user_name" v-model="priceMax" />
        </div>

        <!-- Submit form button -->
        <button class="search-validate">Rechercher</button>
      
    </form> 
    
  </div>
</template>

<script>
import classifiedsService from "../../services/classifiedsService";
import storage from "../../plugins/storage";
  export default {
    name: "FiltersDesktop",
    components: {

    },

    props: {
    title: {
      type: String, 
      default: 'Prix'
    }
  },

    data() {
    return{
      city: '',
      priceMin: '',
      priceMax: '',
      searchQuery: "",
      selectedCategory: null,
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
      this.selectedCategory = category;
    },

    // to listen for the event click on search button
    async processForm(event){
      event.preventDefault();
      this.searchQueries = storage.set('searchQueries', [this.selectedCategory, this.city, this.priceMin, this.priceMax]);
      this.$router.push({ name : 'SearchClassifiedsList'});
    },


  }, 

    
};

</script>

<style scoped lang="scss">
@import "../../assets/scss/main";

.filters-desktop {
  display: none;
}
.input-filters{
  width: 300px;
}

@media screen and (min-width: 576px) {
}
@media screen and (min-width: 768px) {
}
@media screen and (min-width: 992px) {
  .filters-desktop {
    display: block;
  }
  .filters-desktop {
    position: fixed;
    margin-top: 20px;
    margin-left: 25px;
    width: 255px;
    
  }
  select {
    width: 100%;
    border: 0;
    padding-bottom: 1em;
    border-bottom: solid 1px $text-color;
    margin-bottom: 1em;
    font-size: 14px;
    cursor: pointer;
    background-color: white;
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
    text-indent: 25px;
  }

 .input-price {
    display: flex;
    gap: 20px;
    justify-content: space-around;
  }
  .input-price input {
    width: 115px;
  }
  .input-price input::placeholder,
  .input-filters input::placeholder {
    font-style: italic;
    padding-left: 2px;
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
    width: 100%;
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
    transition: all 0.3s;
  }
  .search-validate:hover {
    background-color: $secondary-green;
  }
  
}
@media screen and (min-width: 1200px) {
}
@media screen and (min-width: 1400px) {
}
</style>

