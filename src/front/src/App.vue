<template>
  <div id="app">
    <img height=50 alt="Vue logo" src="./assets/logo.png">
    <Geolocation/>
    <Reservoir/>
  </div>
</template>

<script>
import Reservoir from './components/Reservoir.vue'
import Geolocation from './components/Geolocation.vue'

export default {
  name: 'app',
  components: {
    Reservoir,
    Geolocation
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
