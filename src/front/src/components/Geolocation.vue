<template>
  <div>
    <Weather :id="weather_forecast.id"/>
		<Temperature :celsius="weather_forecast.temperature" />
		<p v-if="isGeoAvailable === false"> Geolocation not available </p>
    <Reservoir :reservoirName="closest_reservoir.name_front" :waterLevel="closest_reservoir.data.water_percentage"/>
  </div>
</template>

<script>
import axios from 'axios'

import Reservoir from './Reservoir.vue'
import Weather from './Weather.vue'
import Temperature from './Temperature.vue'

export default {
	name: 'Geolocation',
	components: {
		Temperature,
    Weather,
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
				id: null,
				temperature: 0,
				description: null
			},
			close_reservoirs: [],
			closest_reservoir: {
				id: null,
				name_front: null,
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
            // console.error(error)
          })
      } else {
        this.isGeoAvailable = false
      }
		}
	},
	watch: {
		coords: {
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
			},
			deep: true
		},
		closest_reservoir: {
			handler: function () {
				// And get weather forecast
				axios
				.get('https://api.openweathermap.org/data/2.5/weather', {
					params: {
						lat: parseFloat(this.closest_reservoir.data.coordinates.lat),
						lon: parseFloat(this.closest_reservoir.data.coordinates.long),
						APPID: this.wheaterAPIkey,
					}
				})
				.then(response => {
					this.weather_forecast.id = response.data.weather[0].id
					this.weather_forecast.temperature = parseFloat((parseFloat(response.data.main.temp) - 273).toFixed(2))
					this.weather_forecast.description = response.data.weather[0].description
					console.log(this.weather_forecast.description)
					console.log(this.weather_forecast.id)
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
