// This should eventually be called app.loadWeather
// but I'm naming it app.loadCurrentTemp because
// that's what this specific code is doing.

// var userData = $('#user-data').html();
// var template = _.template(userData, {variable: 'm'});

app.loadCurrentTemp = function() {

  // Declaring variable with weather API info
  var weather = $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=Durham,nc');

  // Using the method '.done' to retrieve the temp
  weather.done( function(data) {

    // The API's' temperature data was stored in an
    // object called "main" - tempData contains that
    // stringified information taken from data.main
    var tempData = JSON.stringify(data.main);

    // Parsing the tempData to be able to pull the value
    var tempDataParsed = JSON.parse(tempData);

    // Pulling the value (.temp) from the parsed string
    // and storing it in a variable that indicates the
    // info is in Kelvin
    var tempInK = tempDataParsed.temp;

    // Declaring function that converts Kelvin to Fahrenheit
    function convertToFah(k) {
      return (k - 273.15) * 1.8000 + 32.00;
    }

    // Declaring variable that holds the current (rounded)
    // temperature in fahrenheit
    var tempInFah = Math.round(convertToFah(tempInK));

    // Displays the tempature in the HTML, used prepend
    // instead of append in order to have the info display
    // in front of the degree sign.
    $('.weather').prepend(tempInFah);

  });

};
//Calls function
// app.loadCurrentTemp();



// TODO:
// - Need to write the '.fail' code in case of error
// - Need to write the code for displaying weather condition images
// - Need to change code to display the forcast for a given day
