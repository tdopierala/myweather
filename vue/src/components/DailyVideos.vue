<template>
	<div class="daily-videos-wrapper">
		<!------------- DailyVideos ---------------->
		<div class="container">
			<div class="row">
				<div class="col-12 col-lg-3">
					<h2>Daily Weather Forecast Videos</h2>
					<p>Bireasrtasas mioyreas deuyasa souygas dekiertas</p>
				</div>
				<div class="col-12 col-md-4 col-lg-3" v-for="(video, index) in videos" v-bind:key="index">
					<figure>
						<a href="#" v-on:click="showVideo(video, $event)">
							<!-- <img src="https://picsum.photos/id/10/268/155" alt="video1"> -->
							<img v-bind:src="`https://img.youtube.com/vi/${video}/0.jpg`" v-bind:alt="video">
							<font-awesome-icon icon="play" />
						</a>
					</figure>
				</div>
			</div>
		</div>
		<b-modal
			id="video-modal"
			size="lg"
			centered
			no-fade
			hide-footer
			modal-title="false">
			<div class="video-loader">
				<div class="lds-facebook tblack"><div></div><div></div><div></div></div>
				<p>Loading, please wait...</p>
			</div>
			<div class="video-box">
				<youtube
					v-bind:video-id="videoId"
					v-bind:player-width="765"
					v-bind:player-height="430">
				</youtube>
			</div>
		</b-modal>
	</div>
</template>

<script>
export default {
	name: 'DailyVideos',
	data() {
		return {
			videoId: null,
			videos: [
				// '-uyxKLaaN00',
				'fWQjCwwBWHw',
				'cEUAm4f7ioM',
				'pz9CAVgbnXE',
			],
		};
	},
	methods: {
		showVideo(video, event) {
			event.preventDefault();
			this.videoId = video;
			this.$bvModal.show('video-modal');
		},
	},
};
</script>
