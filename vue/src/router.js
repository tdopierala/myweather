import Vue from 'vue';
import Router from 'vue-router';
import Forecasts from './components/Forecasts.vue';

Vue.use(Router);

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'Forecasts',
			component: Forecasts,
		},
		{
			path: '/map',
			name: 'Map',
			component: () => import('./components/Map.vue'),
		},
		{
			path: '/statistics',
			name: 'Statistics',
			component: () => import('./components/Statistics.vue'),
		},
		{
			path: '/photos',
			name: 'Photos',
			component: () => import('./components/Photos.vue'),
		},
		{
			path: '/news',
			name: 'News',
			component: () => import('./components/News.vue'),
		},
	],
});
