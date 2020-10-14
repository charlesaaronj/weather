//get form using class "form"
const cityForm = document.querySelector('form');
//get 
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document. querySelector('img.time');
const icon = document.querySelector('.icon img');
const notFound = document.querySelector('.no');




const updateUI = (data) => {

  //destructure properties

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
//takes city value user types in on form
const updateCity = async (city) => {
    //returns promise so use await
    //can can from app.js because file is in html before forecast.js
    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key);
//returns object
    return { cityDets, weather };
};
//add listener to form submit event - first task 
cityForm.addEventListener('submit', e => {
    e.preventDefault();
    //get value from 'city' field
    const city = cityForm.city.value.trim();
    cityForm.reset();

    //update UI with new city
    updateCity(city)
    .then(data => {
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

if(localStorage.getItem('city')){
    updateCity(localStorage.getItem('city'))
    .then(data => {
        updateUI(data)
    })
    .catch(err => console.log(err));

    };




