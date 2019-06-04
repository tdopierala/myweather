import Vue from 'vue';
import Router from 'vue-router';
import Forecasts from './components/Forecasts.vue';

Vue.use(Router);

export default new Router({
	// mode: 'history',
	// base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'forecasts',
			component: Forecasts,
		},
		{
			path: '/map',
			name: 'map',
			component: () => import('./components/Map.vue'),
		},
		{
			path: '/statistics',
			name: 'statistics',
			component: () => import('./components/Statistics.vue'),
		},
		{
			path: '/photos',
			name: 'photos',
			component: () => import('./components/Photos.vue'),
		},
		{
			path: '/news',
			name: 'news',
			component: () => import('./components/News.vue'),
		},
	],
});
