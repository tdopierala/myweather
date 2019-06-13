<template>
	<div class="search-box-wrapper">
		<!------------- SearchBox ---------------->
		<div class="container">
			<div class="row">
				<div class="col-12 col-lg-6">
					<form>
						<input type="text" name="search" id="locSearch" placeholder="Search location">
						<a href="#">
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
			searchInput: null,
			autocomplete: null,
			place: null,
		};
	},
	methods: {
		fillInAddres() {
			console.log('fillInAddress');
		},
	},
	async mounted() {
		try {
			const search = document.getElementById('locSearch');
			this.searchInput = search;


			const google = await gmapsInit();
			this.google = google;
			// this.searchBox = new google.maps.Places.SearchBox(this.searchInput);

			const autocomplete = new google.maps.places.Autocomplete(search, { types: ['geocode'] });
			this.autocomplete = autocomplete;

			autocomplete.setFields([
				'geometry',
				// 'photos',
			]);

			autocomplete.addListener('place_changed', () => {
				this.place = autocomplete.getPlace();

				this.$emit('getPlace', this.place);
			});

			/*
			const geocoder = new google.maps.Geocoder();
			geocoder.geocode({ address: 'Osowa góra, Bydgoszcz' }, (results, status) => {
				if (status !== 'OK' || !results[0]) {
					throw new Error(status);
				}
				console.log(results);
				// map.setCenter(results[0].geometry.location);
				// map.fitBounds(results[0].geometry.viewport);
			});
			*/
		} catch (error) {
			// eslint-disable-next-line no-console
			console.error(error);
		}
	},
};
</script>
