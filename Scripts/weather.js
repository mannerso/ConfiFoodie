// var weather;

var url = 'http://api.openweathermap.org/data/2.5/weather?q=';
var apiKey = '&appid=d196b19dfff57ff2ede0751c52d064e0';
var units = '&units=imperial';
var input = document.querySelector("#city");
var searchField = document.querySelector("#searchField");

function setup() {

  var button = select('#submit');
  button.mousePressed(findWeather);
  searchField.addEventListener("submit", function (event) {
    event.preventDefault();
  })
}
//  <input=select:true ('#city')> <input>

<<<<<<< HEAD
document.getElementById('searchButton').addEventListener('click', findWeather)

function findWeather(event) {
  event.preventDefault();
  input = input.value;
  url = url + input + apiKey + units;
  console.log(url);
  fetch(url)
    // api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}    
    .then(response => response.json())
    .then(data => {
      console.log(data.main.temp);
      var temp = data.main.temp
      var tempWeather = document.querySelector('#weatherTemp');
      tempWeather.innerText = temp;


=======
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
>>>>>>> 56488b973b46ba296ab03658e56287e3af5a971f

    })
}
