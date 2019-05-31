<template>
	<div class="weather-info-wrapper">
		<!------------- WeatherInfo ---------------->
		<div class="container">
			<div class="row">
				<div class="col-sm-12 col-lg-5">
					<div class="weather-news-box">
						<img src="https://picsum.photos/id/1019/391/196" alt="artTitle">
						<h3>Weather In Pictures</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis cursus consectetur
							felis a pellentesque. Vestibulum ut hendrerit tortor. Suspendisse finibus aliquam
							sapien ut ornare. Integer tristique tellus est, at pretium leo tincidunt in. Orci
							varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
						</p>
						<button type="button" class="btn btn-primary">read more</button>
					</div>
				</div>
				<div class="col-sm-12 col-lg-3">
					<h3>TOP 10 CITY WEATHER FORECASTS</h3>
					<p>
						Donec rutrum eleifend suscipit. Orci varius natoque penatibus et magnis
						dis parturient montes, nascetur ridiculus mus.
					</p>
					<ul>
						<li><a href="">paris</a></li>
						<li><a href="">new york</a></li>
						<li><a href="">london</a></li>
						<li><a href="">moscow</a></li>
						<li><a href="">rome</a></li>
					</ul>
					<ul>
						<li><a href="">dubai</a></li>
						<li><a href="">madrit</a></li>
						<li><a href="">berlin</a></li>
						<li><a href="">mumbai</a></li>
						<li><a href="">athens</a></li>
					</ul>
					<button type="button" class="btn btn-primary">more</button>
				</div>
				<div class="col-sm-12 col-lg-4">
					<img src="https://picsum.photos/id/1018/268/185" alt="infoImg">
					<h3>Features & Analysis</h3>
					<p>
						Duis quis interdum tortor, in tristique quam. Aenean dignissim est sed felis
						lacinia pharetra. Interdum et malesuada fames ac ante ipsum primis in faucibus.
						Aenean at elementum nisl, et finibus ipsum. Quisque ornare velit nisi, nec
						rhoncus mauris bibendum sed.
					</p>
					<button type="button" class="btn btn-primary">more</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'WeatherInfo',
};
</script>
