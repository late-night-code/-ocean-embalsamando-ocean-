<template>
  <div id="app">
    <Geolocation/>
  </div>
</template>

<script>
import Geolocation from './components/Geolocation.vue'

export default {
  name: 'app',
  components: {
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
  margin: 0;
}

body {
  margin: 0;
  background: rgb(231, 242, 252);
}
</style>
