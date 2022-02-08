<template>
  <div class="filters-desktop">
    <form class="input-filters" @submit="handleSubmit" >
      <div class="input-filters">

        <!-- Select a category -->
        <label for="name">Choisissez une categorie</label>
        <select v-model="selectedCategory" name="selectedCategory">
          <option 
          v-for="category in categoryArray" 
          :key="category.name"
          :value="category.id"
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
      searchQueries: "",
      selectedCategory: '',
      categoryArray: []
    };
  },
  async created(){
    this.categoryArray = await classifiedsService.loadClassifiedProductCategory();
  },
  methods: {
    async handleSubmit(event){
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
  width: 100%;
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
    width: 420px;
    
  }
  select {
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

