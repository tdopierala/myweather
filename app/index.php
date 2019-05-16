<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>My Weather</title>

	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">
	<link rel="stylesheet" href="./css/styles.css">

	<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
	<script src="./js/jquery.blockUI.js"></script>
	<script src="./js/popper.min.js" ></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" ></script>

	<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA97EJQ557nR16jGfyB42A4T9mTT9WTSdY" async defer></script>

	<script src="./js/gmap.js"></script>
	<script src="./js/app.js"></script>
	<script src="./js/main.js"></script>

	<script> 
		var api_url = "https://api.dopierala.net.pl/"; 
		var openweathermap_url = "https://api.openweathermap.org/";
		var openweathermap_appid = "46a61e9348b237e1836ee6c9f7301638";
		var proxy = true;
	</script>

</head>
<body>
	<header>
		<div class="container">
			<div class="row">
				<div class="col-6">
					<h1><a href="./">My<span class="top-color">Weather</span></a></h1>
				</div>
				<nav class="col-6">
					<ul id="topmenu">
						<li><a href="#forecasts">Forecasts</a></li>
						<li><a href="#statistics">Statistics</a></li>
						<li><a href="#photos">Photos</a></li>
						<li><a href="#news">News</a></li>
					</ul>
				</nav>
			</div>
		</div>
	</header>

	<main>
		<section class="searchbox">
			<div class="container">
				<div class="row">
					<div class="col-6">
						<form action="./">
							<div class="form-group">
								<input type="text" name="search" placeholder="Search location" class="search-input form-control" />
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>

		<section id="map-box" class="body-section">
			<div class="">
				<div class="coordinates">latitude: <span id="latclicked"></span> longitude: <span id="longclicked"></span></div>
				<div id="map"></div>
			</div>
		</section>

		<section id="stat-box" class="body-section">
			<div class="container">

				<div class="stat-info">
					Top location: <span id="topLocation"></span>
				</div>

				<div class="stat-info">
					Highest temp.: <span id="minTemp"></span>&deg;C
				</div>

				<div class="stat-info">
					Lowest temp.: <span id="maxTemp"></span>&deg;C
				</div>

				<div class="stat-info">
					Avg temp.: <span id="avgTemp"></span>&deg;C
				</div>

				<div class="stat-info">
					Number of searches: <span id="searchCount"></span>
				</div>

				<table class="table" id="stat-table">
					<thead>
						<tr>
							<th>#</th>
							<th>Location</th>
							<th>Latitude</th>
							<th>Longitude</th>
							<th>Temp</th>
							<th>Clouds</th>
							<th>Wind</th>
							<th>Time</th>
						</tr>
					</thead>
					<tbody id="stat-table-body">
					</tbody>
				</table>
			</div>
		</section>
	</main>

	<footer>
		<div class="container">
			<div class="row">
				<div class="col-6">
					<span class="footer-title"><a href="./">My<span class="top-color">Weather</span></a></span>
					<span>&copy; 2019</span>
					| <span><a href="#">Privacy policy</a></span>
				</div>
			</div>
		</div>
	</footer>

	<div id="popup"></div>
</body>
</html>