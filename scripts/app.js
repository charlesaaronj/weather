const forecast = new Forecast();
    



const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document. querySelector('img.time');
const icon = document.querySelector('.icon img');
const notFound = document.querySelector('.no');

//4 - update the UI with this function
const updateUI = (data) => {

  //destructure the data - stores each data type in the same const name

    const {cityDets, weather} = data;


details.innerHTML = `
<h5 class="my-3">${cityDets.EnglishName}</h5>
<div class="my-3">${weather.WeatherText}</div>
<div class="display-4 my-4">
  <span>${weather.Temperature.Imperial.Value}</span>
  <span>&deg;C</span>
  `;
  
const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;

icon.setAttribute('src',iconSrc);

let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';

// if(weather.IsDayTime){
//     timeSrc='img/day.svg'
// } else {
//     timeSrc='img/night.svg'
// };
time.setAttribute('src', timeSrc);


if (card.classList.contains('d-none')){
    card.classList.remove('d-none');
}
};
//2 - takes city value user types in on form
// const updateCity = async (city) => {
//     console.log('User searched for city: ' + (city));
//     //returns promise so use await
//     //functions in forecast.js - comes before app.js in HTML
//     const cityDets = await getCity(city);
//     const weather = await getWeather(cityDets.Key);
//     //returns object with the city details and weather
//     console.log('Conditions returned: City Details and Weather')
//     //use object shorthand to shorten weather: weather
//     return { cityDets, weather };
// };
//1 - add listener to form submit event
cityForm.addEventListener('submit', e => {
    e.preventDefault();
    //get value typed in from 'city' field
    const city = cityForm.city.value.trim();
    cityForm.reset();

// 3 - update UI with city typed in
//getWeather returns a promise so we can use .then
    forecast.updateCity(city)
    .then(data => {
        console.log(data);
        //call updateUI function
        updateUI(data);
        notFound.style.display = 'none';

        localStorage.setItem('city', city);
    })
    .catch(err => {
        console.log(err);
        console.log('no location');
        notFound.style.display = 'block';
        notFound.style.color = 'red';
    
    });
    
    
});

// if(localStorage.getItem('city')){
//     forecast.updateCity(localStorage.getItem('city'))
//     .then(data => {
//         updateUI(data)
//     })
//     .catch(err => console.log(err));

//     };




