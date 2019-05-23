<template>
  <div style="height: 200px">
		<h1>
			Latitude is: <b-badge>{{ coords.lat}}</b-badge><br>
			Longitude is: <b-badge>{{ coords.long}}</b-badge>
		</h1>
		<p v-if="isGeoAvailable === false">
			Geolocation not available
		</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Geolocation',
  data () {
    return {
			info: null,
			isGeoAvailable: true,
      error: null,
      coords: {
        lat: '',
        long: ''
      }
    }
  },
  mounted () {
		this.getLocation()
		// axios
    //   .get('https://api.coindesk.com/v1/bpi/currentprice.json')
		//   .then(response => (this.info = response))
	},
	methods: {
		getLocation () {
				if ('geolocation' in navigator) {
					navigator.geolocation
						.getCurrentPosition((position) => {
							const lat = position.coords.latitude
							const long = position.coords.longitude
							this.coords.lat = lat
							this.coords.long = long
				}, (error) => {
            this.error = {
              code: error.code,
              msg: error.message
            }
            console.error(error)
          })
      } else {
        this.isGeoAvailable = false
      }
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
