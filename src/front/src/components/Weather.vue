<template>
  <div>
    <ThunderShowers class="animated zoomIn" v-if="(id >= 200 && id <= 202) || (id >= 230 && id <= 232)"/>
    <Lightning class="animated zoomIn" v-if="id >= 210 && id <= 229"/>
    <Sunny class="animated zoomIn" v-if="id == 800"/>
    <Cloudy class="animated zoomIn" v-if="id > 800"/>
    <!-- <ThunderShowers/>
    <ThunderShowers/>
    <ThunderShowers/>
    <ThunderShowers/>
    <ThunderShowers/>
    <ThunderShowers/> -->
		
  </div>
</template>

<script>
import ThunderShowers from './wheater/ThunderShowers.vue'
import Lightning from './wheater/Lightning.vue'
import Sunny from './wheater/Sunny.vue'
import Cloudy from './wheater/Cloudy.vue'
// import ThunderShweather-animationowers from './wheater/ThunderShowers.vue'
// import ThunderShowers from './wheater/ThunderShowers.vue'
// import ThunderShowers from './wheater/ThunderShowers.vue'
// import ThunderShowers from './wheater/ThunderShowers.vue'
// import ThunderShowers from './wheater/ThunderShowers.vue'
// import ThunderShowers from './wheater/ThunderShowers.vue'
// import ThunderShowers from './wheater/ThunderShowers.vue'
// import ThunderShowers from './wheater/ThunderShowers.vue'


export default {
	name: 'Weather',
	components: {
    ThunderShowers,
		Lightning,
		Sunny,
		Cloudy,
		// ThunderShowers,
		// ThunderShowers,
		// ThunderShowers,
		// ThunderShowers,
		// ThunderShowers,
		// ThunderShowers,
	},
  props: {
		id: null
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
