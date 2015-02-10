app.loadCurrentTemp = function(apptCityState) {

  var weather = $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + apptCityState);

  weather.done( function(data) {
    var tempData = JSON.stringify(data.main);
    var tempDataParsed = JSON.parse(tempData);
    var tempInK = tempDataParsed.temp;

    function convertToFah(k) {
      return (k - 273.15) * 1.8000 + 32.00;
    }

    var tempInFah = Math.round(convertToFah(tempInK));

    $('.weather').prepend(tempInFah);

    var weatherDescript = data.weather[0].description;
    $('.weather-description').append(weatherDescript);

  });

};

//// Trying to print the weather description but the object was within
//// its own array and parse wouldn't work.
// var weatherDetail = JSON.stringify(data.weather);
// var weatherDetailParsed = JSON.parse(weatherDetail);
// var weatherDescription = weatherDetail.description;
