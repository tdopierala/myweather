// import fontawesome from '@utils/fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
	faUserSecret,
	faSearch,
	faPlay,
	faUmbrella,
	faCloud,
	faCloudSun,
	faCloudRain,
	faCloudSunRain,
	faCloudMeatball,
	faSun,
	faSmog,
	faCloudShowersHeavy,
	faCity,
	faTemperatureHigh,
	faTemperatureLow,
	faThermometerHalf,
	faListOl,
	faPooStorm,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import VueYouTubeEmbed from 'vue-youtube-embed';
import BlockUI from 'vue-blockui';

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
	faCloudRain,
	faCloudSunRain,
	faCloudMeatball,
	faSun,
	faSmog,
	faCloudShowersHeavy,
	faCity,
	faTemperatureHigh,
	faTemperatureLow,
	faThermometerHalf,
	faListOl,
	faPooStorm,
);

Vue.use(BootstrapVue);
Vue.use(VueYouTubeEmbed);
Vue.use(BlockUI);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
	router,
	render: h => h(App),
}).$mount('#app');
