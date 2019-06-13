<template>
	<div class="statistics-wrapper">
		<div class="container">
			<div class="row">
				<div class="col-xl-3">
					<div id="top-location" class="statistics-box">
						<font-awesome-icon icon="city" />
						<span>{{ topLocation[0]._cityname }}</span>
					</div>
				</div>
				<div class="col-xl-2">
					<div id="highest-temperature" class="statistics-box">
						<font-awesome-icon icon="temperature-high" />
						<span>{{ calculateTemp(temperatures._max) }}&deg; C</span>
					</div>
				</div>
				<div class="col-xl-2">
					<div id="lowest-temperature" class="statistics-box">
						<font-awesome-icon icon="temperature-low" />
						<span>{{ calculateTemp(temperatures._min) }}&deg; C</span>
					</div>
				</div>
				<div class="col-xl-2">
					<div id="avg-temperature" class="statistics-box">
						<font-awesome-icon icon="thermometer-half" />
						<span>{{ calculateTemp(temperatures._avg) }}&deg; C</span>
					</div>
				</div>
				<div class="col-xl-2">
					<div id="amount-searches" class="statistics-box">
						<font-awesome-icon icon="list-ol" />
						<span>{{ count }}</span>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-12">
					<table class="table">
						<thead>
							<tr>
								<th>No.</th>
								<th>Location</th>
								<th>temperature</th>
								<th>Clouds</th>
								<th>Wind speed</th>
								<th>Latitude</th>
								<th>Longitude</th>
								<th>Request time</th>
								<th>Created</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(weather, id) in weatherHistory" :key="id">
								<td v-html="weather.id"></td>
								<td v-html="weather.cityname"></td>
								<td v-html="calculateTemp(weather.tempavg) + '&deg; C'"></td>
								<td v-html="weather.clouds + '%'"></td>
								<td v-html="weather.windspeed + 'm/s'"></td>
								<td v-html="parseFloat(weather.latitude).toPrecision(6)"></td>
								<td v-html="parseFloat(weather.longitude).toPrecision(6)"></td>
								<td v-html="weather.dt/1000 + 's'"></td>
								<td>{{ weather.created }}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
		<BlockUI v-if="gettingData">
			<div class="lds-facebook tblack"><div></div><div></div><div></div></div>
			<p>Loading, please wait...</p>
		</BlockUI>
	</div>
</template>

<script>
import Axios from 'axios';
import moment from 'moment';

export default {
	name: 'Statistics',
	data() {
		return {
			count: 0,
			temperatures: {
				_max: 0,
				_min: 0,
				_avg: 0,
			},
			topLocation: [{
				_cityname: '',
			}],
			weatherHistory: [],
			gettingData: false,
		};
	},
	methods: {
		calculateTemp(temp) {
			return Math.round(temp - 273.15);
		},
	},
	created() {
		this.gettingData = true;
		Axios.get('https://api.dopierala.net.pl/api/weather')
			.then((response) => {
				/* eslint no-underscore-dangle: off */
				this.count = response.data.count._count;
				this.temperatures = response.data.temperatures;
				this.topLocation = response.data.top_location;

				for (let i = 0; i < response.data.weather.length; i += 1) {
					const weather = response.data.weather[i];
					weather.id = i + 1;
					weather.created = moment(weather.created).format('YYYY-MM-DD HH:mm:ss');
					this.weatherHistory.push(weather);
				}

				this.gettingData = false;
			});
	},
};
</script>
