// import fontawesome from '@utils/fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
	faUserSecret,
	faSearch,
	faPlay,
	faUmbrella,
	faCloud,
	faCloudSun,
	faCloudSunRain,
	faSun,
	faSmog,
	faCloudShowersHeavy,
	faCity,
	faTemperatureHigh,
	faTemperatureLow,
	faThermometerHalf,
	faListOl,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import BlockUI from 'vue-blockui';

import Vue from 'vue';
import App from './App.vue';
import router from './router';

import '@/assets/sass/index.sass';

library.add(
	faUserSecret,
	faSearch,
	faPlay,
	faUmbrella,
	faCloud,
	faCloudSun,
	faCloudSunRain,
	faSun,
	faSmog,
	faCloudShowersHeavy,
	faCity,
	faTemperatureHigh,
	faTemperatureLow,
	faThermometerHalf,
	faListOl,
);

Vue.use(BlockUI);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
	router,
	render: h => h(App),
}).$mount('#app');
