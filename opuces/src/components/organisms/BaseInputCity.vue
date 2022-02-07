<template>
  <section class="input-filters">
    <div>

    <!--  computed function for when you start entering a value on the input, it starts searching at the same time --> 
      <input type="text" placeholder="Villes" class="selected-item">
       
      
    </div>
  
  </section>  
    
</template>


<script>



</script>
<style scoped lang="scss">
@import "../../assets/scss/main";
@media screen and (min-width: 576px) {
}
@media screen and (min-width: 768px) {
}
@media screen and (min-width: 992px) {

.dropdown-wrapper {
  max-width: 250px;
  position: relative;
  margin: 0;
  
}

.selected-item {
  height: 40px;
  border-radius: 5px;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  background: url("../../assets/svg/picto-location.svg"), $light-grey;
  background-repeat: no-repeat;
  background-size: 12px 17px;
  background-position: 10px 10px;
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
}
@media screen and (min-width: 1200px) {
}
@media screen and (min-width: 1400px) {
}



</style>
