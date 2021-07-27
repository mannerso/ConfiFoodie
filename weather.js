var weather;

 var api = 'http://api.openweathermap.org/data/2.5/weather?q=' ;
 var city = 'Salt Lake City';
 var apiKey = '&appid=d196b19dfff57ff2ede0751c52d064e0';
 var units = '&units=imperial';
function setup() {
    createCanvas(400,200) ;
    var button = select ('#submit');
    button.mousePressed(findWeather);

} 
   document.getElementById('submit').addEventListener ('click', findWeather());

function findWeather() {
    var url= api + city + apiKey + units;
    fetch(
        url
      )
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          console.log(data);
        });
      
    console.log (url)
    // loadJSON (url, gotData) ;
 
}

function gotData(data) {
    weather = data;
}
