
	// Things to accomplish:
    // Get an API Key from OpenWeatherMap API
    // Create an AJAX call to retrieve data Log the data in console
    // Log the data in HTML
    // Scream Ushindi (victory in Swahili)! at the top of your lungs


var APIKey = "5ab92405efb26737e03a1a070eabee1f"

	// Here we are building the URL we need to query the database
var queryURL = "http://api.openweathermap.org/data/2.5/weather?" +
      "q=Bujumbura,Burundi&units=imperial&appid=" + APIKey;

    // Here we run our AJAX to call to the OpenWeatherMap API
$.ajax({
	url: queryURL,
	method: "GET"
})
	// We store all of the retrieved data inside of an object called response
	.done(function(response){
		//Log the queryURL
		console.log(queryURL);
		//Log the resulting object
		console.log(response);
	

// Transfer content to HTML
$(".city").html("<h1>" + response.name + " Weather Details</h1>");
$(".wind").html("Wind Speed: " + response.wind.speed);
$(".humidity").html("Humidity :" + response.main.humidity);
$(".temp").html("Temperature (F):" + response.main.temp);

// Log the data in the console as well
console.log("Wind Speed: " + response.wind.speed);
console.log("Humidity :" + response.main.humidity);
console.log("Temperature (F):" + response.main.temp);

});