// var weather;

 var api = 'http://api.openweathermap.org/data/2.5/weather?q=' ;
 var apiKey = '&appid=d196b19dfff57ff2ede0751c52d064e0';
 var units = '&units=imperial';
 var input;

 function setup() {

    var button = select ('#submit');
    button.mousePressed(findWeather);

<<<<<<< HEAD
     input = select('#city');
     document.getElementById('submit').addEventListener('click', (findWeather));
     
=======
     <input=select('#city')> <input>

>>>>>>> c2678ee7dfbf937b632d9495ce4ecd8b2e1383a3
} 
  // document.getElementById('submit').addEventListener('click', (findWeather));

function findWeather() {
    var url= api + input.value() + apiKey + units;
}
    fetch(
<<<<<<< HEAD
      'http://api.openweathermap.org/data/2.5/weather?q='
      )
        .then(function(response) {
=======
      'http.api.openweathermap.org/data/2.5/weather?q='
      ,
        then(function(response) {
>>>>>>> c2678ee7dfbf937b632d9495ce4ecd8b2e1383a3
          return response.json();
        })
        .then(function(_data) {
          console.log(url);
        }
    
    // loadJSON (url, gotData) ;
 
}

function gotData(data) {
    weather = data;
}
