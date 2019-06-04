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
@import url('https://fonts.googleapis.com/css?family=Sarabun:300,300i,400,400i,600,600i,700,700i,800,800i&display=swap');
#app {
  font-family: 'Sarabun', Helvetica, Arial, sans-serif;
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
