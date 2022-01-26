<template>
  <div>
    <label class="name-label">
      <svg class="icon">
        <use xlink:href="#icon-search"></use>
      </svg>
      <input type="text" placeholder="Rechercher" />
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
export default {
  name: "SearchBar",
};
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
    margin-top:2em;
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

