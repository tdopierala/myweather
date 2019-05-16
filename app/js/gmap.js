var gmap = {

	map: null,

	markers: [],

	position: {lat: 52.071, lng: 19.330},

	styles: [{
		"featureType": "administrative",
		"elementType": "all",
		"stylers": [{ "saturation": "-100" }]
	},{
		"featureType": "administrative.province",
		"elementType": "all",
		"stylers": [{ "visibility": "off" }]
	},{
		"featureType": "landscape",
		"elementType": "all",
		"stylers": [{ "saturation": -100 },{ "lightness": 65 },{ "visibility": "on" }]
	},{
		"featureType": "poi",
		"elementType": "all",
		"stylers": [{ "saturation": -100 },{ "lightness": "50" },{ "visibility": "simplified" }]
	},{
		"featureType": "road",
		"elementType": "all",
		"stylers": [{ "saturation": "-100" }]
	},{
		"featureType": "road.highway",
		"elementType": "all",
		"stylers": [{ "visibility": "simplified" }]
	},{
		"featureType": "road.arterial",
		"elementType": "all",
		"stylers": [{ "lightness": "30" }]
	},{
		"featureType": "road.local",
		"elementType": "all",
		"stylers": [{ "lightness": "40" }]
	},{
		"featureType": "transit",
		"elementType": "all",
		"stylers": [{ "saturation": -100 },{ "visibility": "simplified" }]
	},{
		"featureType": "water",
		"elementType": "geometry",
		"stylers": [{ "hue": "#ffff00" },{ "lightness": -25 },{ "saturation": -97 }]
	},{
		"featureType": "water",
		"elementType": "labels",
		"stylers": [{ "lightness": -25 },{ "saturation": -100 }]
	}],

	init(){

		this.map = new google.maps.Map(
			document.getElementById('map'),
			{
				center: this.position,
				zoom: 7,
				disableDoubleClickZoom: true,
				disableDefaultUI: true,
				zoomControl: true
			}
		);

		this.initMap();
		//this.getLocation();
	},

	initMap() {

		var styledMapType = new google.maps.StyledMapType(this.styles);

		$("#latclicked").html(this.position.lat);
		$("#longclicked").html(this.position.lng);

		this.map.mapTypes.set('styled_map', styledMapType);
		this.map.setMapTypeId('styled_map');

		google.maps.event.addListener(this.map,'click',function(event) {
			$('#map').block({ message: null });

			let _lat = event.latLng.lat();
			let _lng = event.latLng.lng();

			$("#latclicked").html(_lat);
			$("#longclicked").html(_lng);

			for (let i = 0; i < gmap.markers.length; i++) {
				gmap.markers[i].setMap(null);
			}

			var req_start = new Date().getTime();
			$.ajax({
				url: gmap.proxyMixer(openweathermap_url + "data/2.5/weather?lat="+ _lat +"&lon="+ _lng +"&APPID=" + openweathermap_appid), 
				method: "GET",
				crossDomain: true,
				//dataType: "jsonp",
				cache: false,
				//xhrFields: { withCredentials: true },
				success: function(data){
					let req_time = new Date().getTime() - req_start;

					var weather = {
						"cityid": data.id,
						"cityname": data.name,
						"latitude": _lat,
						"longitude": _lng,
						"tempavg": data.main.temp,
						"tempmin": data.main.temp_min,
						"tempmax": data.main.temp_max,
						"clouds": data.clouds.all,
						"windspeed": data.wind.speed,
						"winddeg": data.wind.deg,
						"description": data.weather[0].description,
						"condid": data.weather[0].id,
						"dt": req_time
					};

					$.ajax({
						url: api_url + "api/weather",
						method: "POST",
						data: weather,
						complete: function(xhr, status){
							
							let popup = $("<div>").attr("id", "xpopup").append(
								$('<div>').addClass("popup-box")
									//.append('<button type="button" class="close popupclose" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>')
									.append( $('<div>').html( $('<img>').attr({'alt': data.weather[0].description, 'src': openweathermap_url + 'img/w/'+ data.weather[0].icon +'.png', 'width': "70"}) ) )
									.append( $('<div>').html("Location: <strong>" + data.name + "</strong>"))
									.append( $('<div>').html("Temp: <strong>" + Math.round(data.main.temp - 273.15) + "&deg; C</strong>"))
									.append( $('<div>').html("Clouds: <strong>" + data.clouds.all + "%</strong>"))
									.append( $('<div>').html("Wind: <strong>" + data.wind.speed + " m/s</strong>"))
									//.append( $('<div>').html("Conditions: <strong>" + data.weather[0].main + "</strong>"))
									.append( $('<div>').html("Description: <strong>" + data.weather[0].description + "</strong>"))
							).html();
					
							let marker = new google.maps.Marker({
								position: {lat: _lat, lng: _lng},
								map: gmap.map,
								title: data.name
							});

							gmap.markers.push(marker);

							let infowindow = new google.maps.InfoWindow({
								content: popup
							});

							infowindow.open(gmap.map, marker);

							$('#map').unblock();
						},
						success: function(data, status, xhr){
							
							$('#map').unblock();
						},
						error: function(xhr, status, e){
							
							$('#map').unblock();
						}
					});
				},
				error: function(xhr, status, e){
					console.log(status);
					$('#map').unblock();
				}
			});
		});

		/* marker.addListener('click', function(event) {
			document.getElementById('latclicked').innerHTML = event.latLng.lat();
			document.getElementById('longclicked').innerHTML =  event.latLng.lng();
		}); */

		/* google.maps.event.addListener(map,'dblclick', function(event) {
			var marker = new google.maps.Marker({
				position: event.latLng, 
				map: map, 
				title: event.latLng.lat()+', '+event.latLng.lng()
			});
		}); */
	},

	getLocation() {

		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				function(position){

					//console.log({message: "Location found.", latitude: position.coords.latitude, longitude: position.coords.longitude});

					var pos = {
						lat: position.coords.latitude,
						lng: position.coords.longitude
					};

					gmap.map.setCenter(pos);
				}
			);
		} else {
			console.log("Geolocation is not supported by this browser.");
		}
	},

	proxyMixer(url){

		if(proxy){
			return "./proxy.php?url=" + encodeURIComponent(url);
		} else {
			return url;
		}
	}
};