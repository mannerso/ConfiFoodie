// var weather;

 var api = 'http://api.openweathermap.org/data/2.5/weather?q=' ;
 var apiKey = '&appid=d196b19dfff57ff2ede0751c52d064e0';
 var units = '&units=imperial';
 var input;

 function setup() {

    var button = select ('#submit');
    button.mousePressed(findWeather);

     input = select('#city');

} 
   document.getElementById('submit').addEventListener ('click', findWeather());

function findWeather() {
    var url= api + input.value() + apiKey + units;
    
    fetch(
        url
      )
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          console.log(url);
        });
    
    // loadJSON (url, gotData) ;
 
}

function gotData(data) {
    weather = data;
}
