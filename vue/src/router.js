import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'forecasts',
			component: () => import('./Forecasts/Map.vue'),
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
