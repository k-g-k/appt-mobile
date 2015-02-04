

//This pulls weather for Durham right in this moment
function convertToFah(x) {
  return (x - 273.15) * 1.8000 + 32.00;
}

$.getJSON('http://api.openweathermap.org/data/2.5/weather?q=Durham,nc')
    .done(function (data) {
  var main = JSON.stringify (data.main);
  console.log(main);


  var mainParsed = JSON.parse(main);

  var tempInK = mainParsed.temp;
  console.log(tempInK);


  var tempInFah = convertToFah(tempInK);

  var durhamCurrentTemp = Math.round(tempInFah);

  console.log(durhamCurrentTemp);

});

// TODO:
// - find a way to pull forcast as opposed to current temp
// - the variables are currently defined within a function
