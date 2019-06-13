<template>
	<div class="location-weather-wrapper" v-bind:style="style">
		<!------------- LocationWeather ---------------->
		<div class="container">
			<div class="row">
				<div class="col-12">
					<div class="row">
						<div class="d-sm-none d-md-block d-xl-none col-md-1 col-lg-2"></div>

						<div class="col-sm-12 col-md-10 col-lg-8 col-xl-6 current-location">
							<div>
								<h3 class="current-place">{{ weather.location }}</h3>
								<p class="current-time">{{ time }} <small>{{ ampm }}</small></p>
							</div>
							<div>
								<p class="current-date">{{ day }},<br/>{{ month }}</p>
							</div>
							<div>
								<p class="current-conditions">
									<font-awesome-icon v-bind:icon="icon(weather.conditionid)" />
									{{ temp(weather.temp) }}&deg;
								</p>
							</div>
							<div>
								<p class="current-conditions">{{ weather.condition }}</p>
								<p class="current-conditions-ico">
									<font-awesome-icon icon="cloud" />
									{{ weather.clouds }}%
								</p>
							</div>
						</div>
						<div
							class="d-none d-md-block col-md-12 col-xl-6 forecast-location"
							v-if="forecasts.length > 0">
							<div v-for="(forecast, index) in forecasts" v-bind:key="index">
								<div>{{ shortDay(index + 1) }}</div>
								<div><font-awesome-icon v-bind:icon="icon(forecast.weather[0].id)" /></div>
								<div>{{ temp(forecast.main.temp_max) }}&deg;</div>
								<div>{{ temp(forecast.main.temp_min) }}&deg;</div>
								<div>{{ forecast.weather[0].main }}</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
	</div>
</template>

<script>
import wicons from '@/utils/weatherIcons';
import moment from 'moment';

export default {
	name: 'LocationWeather',
	data() {
		return {
			background: 'https://picsum.photos/id/1057/2050/500',
			style: 'background-image:url(https://picsum.photos/id/323/2050/500)',

			// TODO: dynamicly background change
		};
	},
	props: [
		'weather',
		'forecasts',
	],
	computed: {
		time() { return moment().format('hh:mm'); },
		ampm() { return moment().format('A'); },
		day() { return moment().format('dddd'); },
		month() { return moment().format('MMMM Do'); },
	},
	methods: {
		icon(id) { return wicons[id].icon; },
		temp(temp) {
			if (temp > 0) {
				return Math.round(temp - 273.15);
			}
			return temp;
		},
		shortDay(days) { return moment().add(days, 'd').format('dd'); },
	},
};
</script>
