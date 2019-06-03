<template>
  <div>
    <WindySunny/>
		<p v-if="isGeoAvailable === false"> Geolocation not available </p>
    <Reservoir :reservoirName="closest_reservoir.name" :waterLevel="closest_reservoir.data.water_percentage"/>
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
			wheaterAPIkey: 'e6e43aa3944cdbbdda02a91890461f1c',
			info: null,
			isGeoAvailable: true,
      error: null,
      coords: {
        lat: '',
        long: ''
			},
			weather_forecast: {

			},
			close_reservoirs: [],
			closest_reservoir: {
				id: null,
				name: 'Embalsamando',
				latitude: null,

				longitude: null,
				UTM_latitude: null,
				UTM_longitude: null,
				distance: null,
				data: {
						date: null,
						water: null,
						water_unity: null,
						water_percentage: '0',
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
              // console.log("Coords set: " + this.coords)
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
		coords:{
			handler: function () {
				// Once the location is loaded, request closest reservoir water level
        axios
        .get('https://embalsamando.com/back/api.php', {
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
							// console.log("Water: " + creservoir.data.water_percentage);
							break;
						}
					}
				})
				// And get weather forecast
				axios
				// .get('http://api.openweathermap.org/data/2.5/weather?lat={40.4662128}&lon={-3.7904418}&appid={e6e43aa3944cdbbdda02a91890461f1c}')
			},
			deep: true
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
