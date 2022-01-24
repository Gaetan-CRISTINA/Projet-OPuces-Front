<template>
  <div class="filters-desktop">
    <form>
      <div class="input-filters">
        <select name="Ajouter une catégorie" id="">
          <option value="">
            <span class="add">+</span> Ajouter une catégorie
          </option>
          <option value="0">Lorem</option>
          <option value="0">Ipsum</option>
          <option value="0">Dolor</option>
          <option value="0">Sit</option>
        </select>
        <Categorie />
        <Categorie />
        <Categorie />
        <Categorie />
      </div>
      <div class="input-filters">
        <label for="ville">Ajouter une ville</label>
        <input type="text" id="ville" name="ville" />
        <Villes />
        <Villes />
        <Villes />
      </div>
      <div class="input-filters">
        <label for="name">Prix</label>
        <div class="input-price">
          <input placeholder="Minimum" type="text" id="name" name="user_name" />
          <input placeholder="Maximum" type="text" id="name" name="user_name" />
        </div>
      </div>
      <div class="input-filters">
        <div class="save-search">
          <label for="name">Enregistrer la recherche</label>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </div>
        <input placeholder="Nom de la recherche" type="text" id="savesearch" name="user_name" />
      </div>
      <button type="submit" href="#" class="search-validate">RECHERCHER</button>
    </form>
  </div>
</template>

<script>
import Categorie from "../molecules/Categorie.vue";
import Villes from "../molecules/Villes.vue";

export default {
  name: "FiltersDesktop",
  components: {
    Categorie,
    Villes,
  },
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
    margin-left: 20px;
    width: 420px;
  }
  select {
    width: 100%;
    border: none;
    padding-bottom: 1em;
    border-bottom: solid 1px $text-color;
    margin-bottom: 1em;
    font-size: 14px;
    cursor: pointer;
  }
  select:focus {
    outline: none;
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
  }
}
@media screen and (min-width: 1200px) {
}
@media screen and (min-width: 1400px) {
}
</style>

