<template>
	<div class="location-weather-wrapper" v-bind:style="style">
		<!------------- LocationWeather ---------------->
		<div class="container">
			<div class="row">
				<div class="col-12">
					<div class="row">
						<div class="col-sm-12 col-xl-6 current-location">
							<div>
								<h3 class="current-place">Cancun</h3>
								<p class="current-time">06:20 <small>PM</small></p>
								<p class="current-conditions">
									<font-awesome-icon icon="cloud-showers-heavy" /> 28&deg;
								</p>
							</div>
							<div>
								<p class="current-date">Tuesday,<br/>February 28</p>
								<p class="current-conditions">Rain</p>
								<p class="current-conditions-ico"><font-awesome-icon icon="umbrella" /> 85%</p>
							</div>
						</div>
						<div class="d-none d-lg-block col-lg-12 col-xl-6 forecast-location">
							<div>
								<div>Wed</div>
								<div><font-awesome-icon icon="cloud" /></div>
								<div>29&deg;</div>
								<div>22&deg;</div>
								<div>RealFeel<br/>25&deg;</div>
							</div>
							<div>
								<div>Wed</div>
								<div><font-awesome-icon icon="cloud-sun" /></div>
								<div>29&deg;</div>
								<div>22&deg;</div>
								<div>RealFeel<br/>25&deg;</div>
							</div>
							<div>
								<div>Wed</div>
								<div><font-awesome-icon icon="cloud-sun-rain" /></div>
								<div>29&deg;</div>
								<div>22&deg;</div>
								<div>RealFeel<br/>25&deg;</div>
							</div>
							<div>
								<div>Wed</div>
								<div><font-awesome-icon icon="sun" /></div>
								<div>29&deg;</div>
								<div>22&deg;</div>
								<div>RealFeel<br/>25&deg;</div>
							</div>
							<div>
								<div>Wed</div>
								<div><font-awesome-icon icon="smog" /></div>
								<div>29&deg;</div>
								<div>22&deg;</div>
								<div>RealFeel<br/>25&deg;</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'LocationWeather',
	data() {
		return {
			background: 'https://picsum.photos/id/1057/2050/500',
			style: 'background-image:url(https://picsum.photos/id/323/2050/500)',
		};
	},
};
</script>
