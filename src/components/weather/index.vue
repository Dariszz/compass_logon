<template>
  <div id="weather">
      <span id="city">City not found</span>
      <div id="weatherContainer" />
      <span id="temperature">Temperature not calculated</span>
      <img src="icon" alt="_">
  </div>
</template>

<script>

// importar api
import logicalWeather from '@/api/weather.js'

export default {
    name: 'weather',
}

logicalWeather()

</script>

<style scoped lang="scss">
    @import "./index.scss";
</style>