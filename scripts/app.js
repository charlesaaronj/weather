const conditions = new Conditions();

const radioForm = document.querySelector('form');
const details = document.querySelector('.details');
const time = document. querySelector('.time');


radioForm.addEventListener('submit', e => {
    e.preventDefault();
    const resort = document.getElementById('select').value;
    console.log(resort);
    radioForm.reset();
    conditions.getWeather(resort)
    .then(data => {
        updateUI(data);
    })
    .catch(err => {
        console.log(err);
    });
});

const updateUI = (data) => {
    details.innerHTML = `
    <div>${data.Link}</div>
    <div>${data.WeatherText}</div>
    <div>
      <span>${data.Temperature.Imperial.Value}</span>
      <span>&deg;C</span>
      `;
    
    if(data.IsDayTime){
        console.log('Daytime')
        time.innerHTML = `Daytime`;
     } else {
        console.log('Nighttime')
        time.innerHTML = `Nighttime`;
     };
    };


