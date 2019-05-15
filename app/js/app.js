var app = {
	get(href){

		$(".body-section").hide();

		switch(href){

			case "#forecasts":

				$("#map").empty();

				gmap.init();

				$("#map-box").show();

			break;

			case "#statistics": 

				$('#stat-box .container').block({ 
					message: "Loading..."
				});

				$.get(api_url + "api/weather", function(data){

					$("#topLocation").empty().text(data.top_location[0]._cityname + " (" + data.top_location[0]._count + ")" );

					$("#minTemp").empty().text(Math.round(data.temperatures._min - 273.15));
					$("#maxTemp").empty().text(Math.round(data.temperatures._max - 273.15));
					$("#avgTemp").empty().text(Math.round(data.temperatures._avg - 273.15));

					$("#searchCount").empty().text(data.count._count);

					let tbody = $("#stat-table-body");
					let _data = data.weather;
					tbody.empty();

					for(let i=0; i<_data.length; i++){
						let dt = _data[i].dt;
						tbody.append(
							$("<tr>")
								.append( $("<td>").text(i+1) )
								.append( $("<td>").text(_data[i].cityname) )
								.append( $("<td>").text(_data[i].latitude) )
								.append( $("<td>").text(_data[i].longitude) )
								.append( $("<td>").html(Math.round(_data[i].tempavg - 273.15) + "&deg; C") )
								.append( $("<td>").text(_data[i].clouds + "%") )
								.append( $("<td>").text(_data[i].windspeed + " m/s") )
								.append( $("<td>").text(dt) )
						);
					}

					$('#stat-box .container').unblock();
				});

				$("#stat-box").show();

			break;
		}
	}
}