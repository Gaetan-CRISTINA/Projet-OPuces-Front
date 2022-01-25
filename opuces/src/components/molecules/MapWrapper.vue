<template>
  <div class="map-wrapper">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.372099451999!2d1.422680251247871!3d43.59879346386234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebb72b81308af%3A0x1b60e12b5ae60eac!2s25%20Rue%20des%20Consuls%2C%2031300%20Toulouse!5e0!3m2!1sfr!2sfr!4v1643123883032!5m2!1sfr!2sfr"
      width="600"
      height="450"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "MapWrapper",
  components: {
      
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/main";


.map-wrapper {
  width: 100%;
}
.map-wrapper iframe {
  width: 100%;
  height: 250px;
}

@media screen and (min-width: 576px) {
}
@media screen and (min-width: 768px) {
}
@media screen and (min-width: 992px) {
}
@media screen and (min-width: 1200px) {
}
@media screen and (min-width: 1400px) {
}
</style>

