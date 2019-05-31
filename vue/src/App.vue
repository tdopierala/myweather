<template>
	<div id="app">

		<header class="container">
			<div class="row">
				<div class="col-12 col-md-4 col-lg-6">
					<h1><a href="#">Weather<span>Info</span></a></h1>
				</div>
				<div class="d-none d-sm-block col-sm-12 col-md-8 col-lg-6">
					<nav>
						<ul>
							<li><router-link to="/">Forecasts</router-link></li>
							<li><router-link to="/map">Map</router-link></li>
							<li><router-link to="/statistics">Statistics</router-link></li>
							<li><router-link to="/photos">Photos</router-link></li>
							<li><router-link to="/news">News</router-link></li>
						</ul>
					</nav>
				</div>
			</div>
		</header>

		<main>
			<router-view/>
		</main>

		<footer>
			<span>WeatherInfo C 2019 | <a href="#">Privacy policy</a></span>
		</footer>

	</div>
</template>
