<template>
	<div class="weather-map-wrapper">
		<div id="googleMap"></div>
		<BlockUI v-if="dataLoading">
			<div class="lds-facebook tblack"><div></div><div></div><div></div></div>
			<p>Loading, please wait...</p>
		</BlockUI>
	</div>
</template>

<script>
import Axios from 'axios';
import gmapsInit from '@/utils/gmaps';
import gstyles from '@/utils/gmapsStyles';

const api = 'https://api.openweathermap.org/';
const appid = '46a61e9348b237e1836ee6c9f7301638';

export default {
	name: 'WeatherMap',
	data() {
		return {
			mapSettings: {
				center: { lat: 52.071, lng: 19.330 },
				zoom: 7,
				disableDoubleClickZoom: true,
				disableDefaultUI: true,
				zoomControl: true,
			},
			google: null,
			map: null,
			markers: [],
			dataLoading: false,
		};
	},
	methods: {
		addClickListener() {
			this.google.maps.event.addListener(this.map, 'click', (event) => {
				this.markersCleanup();

				const lat = event.latLng.lat();
				const lng = event.latLng.lng();
				const reqStart = new Date().getTime();

				this.dataLoading = true;

				Axios.get(`${api}data/2.5/weather?lat=${lat}&lon=${lng}&APPID=${appid}`)
					.then((response) => {
						// console.log(response.data);

						const reqTime = new Date().getTime() - reqStart;

						const weather = {
							cityid: response.data.id,
							cityname: response.data.name,
							latitude: lat,
							longitude: lng,
							tempavg: response.data.main.temp,
							tempmin: response.data.main.temp_min,
							tempmax: response.data.main.temp_max,
							clouds: response.data.clouds.all,
							windspeed: response.data.wind.speed,
							winddeg: response.data.wind.deg,
							description: response.data.weather[0].description,
							condid: response.data.weather[0].id,
							dt: reqTime,
						};

						const popup = `
							<div class="popup-box">
								<p>Location: <span>${weather.cityname}</span></p>
								<p>Temp: <span>${Math.round(weather.tempavg - 273.15)}&deg; C</span></p>
								<p>Clouds: <span>${weather.clouds}%</span></p>
								<p>Wind: <span>${weather.windspeed} m/s</span></p>
								<p>Description: <span>${weather.description}</span></p>
							</div>
						`;

						const marker = new this.google.maps.Marker({
							position: { lat, lng },
							map: this.map,
							title: weather.cityname,
						});

						this.markers.push(marker);

						const infowindow = new this.google.maps.InfoWindow({
							content: popup,
						});

						infowindow.open(this.map, marker);

						this.dataLoading = false;
					});
			});
		},
		markersCleanup() {
			for (let i = 0; i < this.markers.length; i += 1) {
				this.markers[i].setMap(null);
			}
		},
	},
	created() {
		this.markersCleanup();
	},
	async mounted() {
		try {
			this.google = await gmapsInit();
			// const geocoder = new google.maps.Geocoder();
			this.map = new this.google.maps.Map(
				// this.$el,
				document.getElementById('googleMap'),
				this.mapSettings,
			);

			const styledMapType = new this.google.maps.StyledMapType(gstyles);

			this.map.mapTypes.set('styled_map', styledMapType);
			this.map.setMapTypeId('styled_map');

			this.addClickListener();
		} catch (error) {
			// eslint-disable-next-line no-console
			console.error(error);
		}
	},
};
</script>
