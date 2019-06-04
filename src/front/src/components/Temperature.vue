<template>
  <div class="temperature">
    <p class="degrees animated delay-4s bounceIn" v-if="celsius">{{celsius + 'º'}}</p>
    <Hot class="animated animated delay-4s bounceIn" v-if="celsius && celsius > 20"/>
    <Cold class="animated animated delay-4s bounceIn" v-if="celsius && celsius <= 20"/>
  </div>
</template>

<script>
import Hot from './temperature/Hot.vue'
import Cold from './temperature/Cold.vue'

export default {
	name: 'Temperature',
	components: {
    Hot,
		Cold
	},
  props: {
		celsius: null
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.temperature {
  position: absolute;
  right: 0;
  top: 0;
  display: inline-flex;
}

.degrees {
  font-size: 12px;
  margin-top: 25px;
  margin-right: -15px;
  color: rgb(50,50,50,0.8)
}
</style>
