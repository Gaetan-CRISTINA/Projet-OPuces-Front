<template>
<section class="input-filters">
    <div>
        <label for="name">Prix</label>
    </div>
    <div class="input-price">
        <input placeholder="Minimum en Euros" type="text" id="minAmount" name="user_name"/> 
    </div>
    <br />
    <div>
        <input placeholder="Maximum en Euros" type="text" id="maxAmount" name="user_name"/>
    </div>
</section>
    
</template>
<script>

</script>
<style scoped lang="scss">
input {
  width: 250px;
  height: 40px;
  border: 2px solid #159ba0;
  font-size: 18px;
  padding-left: 5px;
}

</style>
