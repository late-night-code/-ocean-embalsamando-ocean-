<template>
  <div>
  <!-- <div style="height: 200px"> -->
		<!-- <h1>
			Latitude is: {{ coords.lat}}<br>
			Longitude is: {{ coords.long}}
		</h1>
		<p v-if="isGeoAvailable === false">
			Geolocation not available
		</p> -->
    <WindySunny/>
    <Reservoir :data="closest_reservoir.data.water_percentage"/>

  </div>
</template>

<script>
import axios from 'axios'

import Reservoir from './Reservoir.vue'
import WindySunny from './wheater/WindySunny.vue'

export default {
	name: 'Geolocation',
	components: {
    WindySunny,
		Reservoir
	},
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
			closest_reservoir: {
				id: null,
				name: null,
				latitude: null,

				longitude: null,
				UTM_latitude: null,
				UTM_longitude: null,
				distance: null,
				data: {
						date: null,
						water: null,
						water_unity: null,
						water_percentage: null,
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
              this.coords.lat = position.coords.latitude
              this.coords.long = position.coords.longitude
              console.log("Coords set: " + this.coords)
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
	},
	watch: {
		// Once the location is loaded, request closest reservoir water level
		coords:{
			handler: function () {
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

							console.log("Expected water" + creservoir.data.water_percentage);
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
