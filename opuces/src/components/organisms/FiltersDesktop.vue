<template>
  <div class="filters-desktop">
    <div class="input-filters">

      <BaseSelectCategory />
      
      <BaseInputCity />

      <BaseInputPrice />
      <button @click="applyFilter">Rechercher</button>
      
    </div> 
    
  </div>
</template>

<script>
  import BaseSelectCategory from "../organisms/BaseSelectCategory.vue";
  import BaseInputCity from "../organisms/BaseInputCity.vue";
  import BaseInputPrice from "../organisms/BaseInputPrice.vue"

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
    width: 420px;
    
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
    transition: all 0.3s;
  }
  .search-validate:hover {
    background-color: $secondary-green;
  }

  button {
  background-color: $main-green;
  border: 1px solid #f8f9fa;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  font-family: arial,sans-serif;
  font-size: 14px;
  font-weight: bold;
  margin-top: 10px;
  padding: 10px 24px;
  width: 250px;
  height: 35px;
  min-width: 54px;
  text-align: center;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: pre;
}

  button:hover {
  border-color: #dadce0;
  box-shadow: rgba(0, 0, 0, .1) 0 1px 1px;
  color: black;
}

  button:focus {
  border-color: $main-green;
  outline: none;
}
  
}
@media screen and (min-width: 1200px) {
}
@media screen and (min-width: 1400px) {
}
</style>

