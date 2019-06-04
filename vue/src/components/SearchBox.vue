<template>
	<div class="search-box-wrapper">
		<!------------- SearchBox ---------------->
		<div class="container">
			<!-- <div class="mediaTest"></div> -->
			<div class="row">
				<div class="col-12 col-lg-6">
					<form>
						<input type="text" name="search" id="locSearch" placeholder="Search location">
						<a href="#">
							<!-- <i class="fa fa-search"></i> <i class="fas fa-search"></i> -->
							<font-awesome-icon icon="search" />
						</a>
					</form>
				</div>
				<div class="d-none d-lg-block col-12 col-lg-6">
					<a href="#" class="btn-location-add">+</a>
					<div class="location-box">
						<p>Add location</p>
						<p>Did you know you can add favourite locations?</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import gmapsInit from '@/utils/gmaps';

export default {
	name: 'SearchBox',
	data() {
		return {
			google: null,
			googleHolder: null,
			searchInput: null,
			searchBox: null,
		};
	},
	methods: {

	},
	/* computed: {
		google: {
			set: (val) => {
				console.log('google setter');
				this.googleHolder = val;
			},
			get: () => {
				console.log('google getter');
				return this.googleHolder;
			},
		},
	}, */
	created() {
		console.log('created');
		/* const search = document.getElementById('locSearch');
		console.log(search);
		this.searchInput = search; */

		// const searchBox = new this.google.maps.places.SearchBox(searchInput);
	},
	async mounted() {
		console.log('mounted');

		try {
			const search = document.getElementById('locSearch');
			console.log(search);
			this.searchInput = search;

			this.google = await gmapsInit();
			// console.log(this.google);
			this.searchBox = new this.google.maps.places.SearchBox(this.searchInput);
		} catch (error) {
			// eslint-disable-next-line no-console
			console.error(error);
		}
	},
	watch: {
		google: {
			immediate: true,
			handler() {
				// console.log('watch google');
				// console.log(this.searchInput);
				// this.searchBox = new this.google.maps.places.SearchBox(this.searchInput);
			},
		},
	},
};
</script>
