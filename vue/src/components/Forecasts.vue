<template>
	<div class="forecasts-wrapper">

		<SearchBox v-on:getPlace="getPlace"/>

		<DailyVideos />

		<LocationWeather
			v-bind:weather="weather"
			v-bind:forecasts="forecasts" />

		<WeatherInfo />

	</div>
</template>

<script>
import Axios from 'axios';
import moment from 'moment';

import SearchBox from '@/components/SearchBox.vue';
import DailyVideos from '@/components/DailyVideos.vue';
import LocationWeather from '@/components/LocationWeather.vue';
import WeatherInfo from '@/components/WeatherInfo.vue';

const api = 'https://api.openweathermap.org/';
const appid = '46a61e9348b237e1836ee6c9f7301638';

export default {
	name: 'Forecasts',
	components: {
		SearchBox,
		DailyVideos,
		LocationWeather,
		WeatherInfo,
	},
	data() {
		return {
			position: {
				lat: 52.2297,
				lng: 21.0122,
			},
			weather: {
				location: '',
				temp: 0,
				condition: '',
				conditionid: 0,
				humidity: 0,
				clouds: 0,
			},
			forecasts: [],
		};
	},
	methods: {
		getWeather(pos) {
			Axios.get(`${api}data/2.5/weather?lat=${pos.lat}&lon=${pos.lng}&APPID=${appid}`)
				.then((response) => {
					this.weather.location = response.data.name;
					this.weather.temp = response.data.main.temp;
					this.weather.condition = response.data.weather[0].description;
					this.weather.conditionid = response.data.weather[0].id;
					this.weather.humidity = response.data.main.humidity;
					this.weather.clouds = response.data.clouds.all;
				});

			// api.openweathermap.org/data/2.5/forecast/hourly?lat=35&lon=139
			Axios.get(`${api}data/2.5/forecast/?lat=${pos.lat}&lon=${pos.lng}&APPID=${appid}`)
				.then((response) => {
					const forecasts = response.data.list;
					this.forecasts = [];

					let day = 0;

					for (let i = 0; i < forecasts.length; i += 1) {
						if (this.forecasts.length >= 5) break;

						const dt = moment(forecasts[i].dt_txt).format('D');

						if (day !== dt) {
							day = dt;
							this.forecasts.push(forecasts[i]);
						}
					}
				});
		},
		getPlace(place) {
			this.getWeather({
				lat: place.geometry.location.lat(),
				lng: place.geometry.location.lng(),
			});
		},
	},
	created() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((position) => {
				this.position = {
					lat: position.coords.latitude,
					lng: position.coords.longitude,
				};

				this.getWeather(this.position);
			});
		} else {
			// console.log('Geolocation is not supported by this browser.');
		}

		this.getWeather(this.position);
	},
};
</script>
