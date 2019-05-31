<template>
	<div class="map-wrapper">
		<WeatherMap />
		<!-- <BlockUI>
			<div class="lds-facebook tblack"><div></div><div></div><div></div></div>
		</BlockUI> -->
	</div>
</template>

<script>
import WeatherMap from '@/components/WeatherMap.vue';

export default {
	name: 'Map',
	components: {
		WeatherMap,
	},
	data() {
		return {
			message: 'Test message',
		};
	},
};
</script>

<style>

</style>
