<template>
	<div class="forecasts-wrapper">

		<SearchBox />

		<DailyVideos />

		<LocationWeather />

		<WeatherInfo />

	</div>
</template>

<script>
import SearchBox from '@/components/SearchBox.vue';
import DailyVideos from '@/components/DailyVideos.vue';
import LocationWeather from '@/components/LocationWeather.vue';
import WeatherInfo from '@/components/WeatherInfo.vue';

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

		};
	},
	created() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((position) => {
				const pos = {
					lat: position.coords.latitude,
					lng: position.coords.longitude,
				};

				console.log(pos);
				// gmap.map.setCenter(pos);
			});
		} else {
			console.log('Geolocation is not supported by this browser.');
		}
	},
};
</script>
