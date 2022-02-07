<template>
  <div class="filters-desktop">
    <div class="input-filters">


      <BaseSelectCategory />
      
      <BaseInputCity />


      <BaseInputPrice />
      <button @click="applyFilter" class="search-validate">Rechercher</button>
      
    </div> 
    
  </div>
</template>

<script>
  import BaseSelectCategory from "../organisms/BaseSelectCategory.vue";
  import BaseInputCity from "../organisms/BaseInputCity.vue";
  import BaseInputPrice from "../organisms/BaseInputPrice.vue";

  export default {
    name: "FiltersDesktop",
    components: {
      BaseSelectCategory,
      BaseInputCity,
      BaseInputPrice

    },
    props: {},

    data() {
    return {
      items: [],
      filter: {
        category: '',
        city: '',
        price: ''
      },
      appliedfilter: null
    };
    },

    methods: {
      // to listen for the event click on search button
      applyFilter(){
        this.appliedFilter = {...this.filter};
      }
    },

    computed: {
      // to search for multiple items
      filteredItems() {
        let resultItems = [...this.items];

        if (this.appliedFilter) {
          for (const field in this.appliedFilter) {
            const value = this.appliedFilter[field].trim().toLowerCase();
            if (value)
              resultItems = resultItems.filter(index => index[field].toLowerCase() === value);
          }
        }

        return resultItems;
      }
    }

    
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

