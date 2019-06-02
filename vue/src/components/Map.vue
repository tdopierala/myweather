<template>
	<div class="map-wrapper">
		<WeatherMap />
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
		};
	},
};
</script>
