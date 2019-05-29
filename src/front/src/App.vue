<template>
  <div id="app">
    <WindySunny/>
    <Geolocation/>
    <Reservoir :height="300"/>
  </div>
</template>

<script>
import Reservoir from './components/Reservoir.vue'
import Geolocation from './components/Geolocation.vue'
import WindySunny from './components/wheater/WindySunny.vue'

export default {
  name: 'app',
  components: {
    WindySunny,
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
  background: rgb(231, 242, 252);
  margin: 0;
}

body {
  margin: 0
}
</style>
