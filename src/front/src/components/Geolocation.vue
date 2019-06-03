<template>
  <div style="height: 200px">
		<h1>
			Latitude is: {{ coords.lat}}<br>
			Longitude is: {{ coords.long}}
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
			},
			close_reservoirs: [],
			closest_reservoir

				id: null,
				name: null,
				latitude: null,

				longitude: null,
				UTM_latitude: null,
				UTM_longitude: null,
				distance: null,
				data: {
						date: null,
						water: 0,
						water_unity: null,
						water_percentage: 0,
						coordinates: {
								latitude: null,
								longitude: null
						}
				}
			}
    }
  },
  mounted () {
		this.getLocation()
	},
	methods: {
		// Get client location
		getLocation () {
				if ('geolocation' in navigator) {
					navigator.geolocation
						.getCurrentPosition((position) => {
							const lat = position.coords.latitude
							const long = position.coords.longitude
							this.coords.lat = lat
							this.coords.longhttps://www.google.com/search?client=ubuntu&channel=fs&q=watch+darker+than+black&ie=utf-8&oe=utf-8 = long
							console.log("Coords set")
				}, (error) => {
            this.error = {
              code: error.code,
              msg: error.message
						}
            // console.error(error)
          })
      } else {
        this.isGeoAvailable = false
      }
		}
	},
	watch: {
		// Once the location is loaded, request closest reservoir water level
		coords:{
			handler: function () {
				conso
her")
				axios

				.get('http://embalsamando.com/back/api.php', {
					params: {
						action: 'closest',
						latitude: this.coords.lat,
						longitude: this.coords.long
					}
				})
				.then(creservoirs => {
					this.close_reservoirs = creservoirs.data
					// Closest reservoir with water level different from 0
					for (let i = 0; i < this.close_reservoirs.length; i++) {
						const creservoir = this.close_reservoirs[i];

						if (creservoir.data.water_percentage !== "0.00") {
							this.closest_reservoir = creservoir;

							console.log(creservoir.data.water_percentage);
							break;
						}
					}
				})
			},
			deep: true
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
