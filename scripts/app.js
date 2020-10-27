const weather = new Weather();
const radioForm = document.querySelector('form');
const current = document.querySelector('.current');
const today = document.querySelector('.today');
const body = document.querySelector('body');

radioForm.addEventListener('submit', e => {
    e.preventDefault();
    const resort = document.getElementById('select').value;
    console.log(resort);
    weather.getConditions(resort)
    .then(dataConditions => {
        updateConditions(dataConditions);
    })
    .catch(err => {
        console.log(err);
    });
    weather.getForecast(resort)
    .then(dataForecast => {
        updateForecast(dataForecast);
    })
    .catch(err => {
        console.log(err);
    });
});
const updateConditions = (dataConditions) => {
    let time;
    if(dataConditions.IsDayTime){
        let time = `
        <div class="is-size-6">
   Daytime
    </div>
        `;
        console.log(time);
     } else {
        let time = `
        <div class="is-size-6">
   Nighttime
    </div>
        `;
        console.log(time);
     };
     console.log(time)
    current.innerHTML = `
    <div class="tile-style">
    ${time}
    <div class="is-size-6 has-text-weight-medium"><a href="${dataConditions.Link}" target="_blank">Current</a></div>
    <div class="is-size-1">
      <span>${dataConditions.Temperature.Imperial.Value}</span>
      <span>&deg;F</span>
      </div>
      <img class="my-0" src="/img/icons/${dataConditions.WeatherIcon}.svg">
      <div class="is-size-6">${dataConditions.WeatherText}</div>
      </div>
      `;
};
const updateForecast = (dataForecast) => {
    console.log(dataForecast);
    const timeStamp =  `${dataForecast.DailyForecasts[0].Date}`;
    const friendlyDate = new Date(timeStamp);
    today.innerHTML = `
    <div class="tile-style">
    <div class="is-size-6 has-text-weight-medium"><a href="${dataForecast.DailyForecasts[0].Link}" target="_blank">Today</a></div>
    <div class="is-size-2 mt-3">
      <span>${dataForecast.DailyForecasts[0].Temperature.Minimum.Value}</span>
      <span>&deg;F</span> - 
      <span>${dataForecast.DailyForecasts[0].Temperature.Maximum.Value}</span>
      <span>&deg;F</span>
    </div>
    <img class="my-0" src="/img/icons/${dataForecast.DailyForecasts[0].Day.Icon}.svg">
    <div class="is-size-6 mx-6">
      ${dataForecast.DailyForecasts[0].Day.IconPhrase} during day
      </div>
      <img class="my-0" src="/img/icons/${dataForecast.DailyForecasts[0].Night.Icon}.svg">
      <div class="is-size-6"">
      ${dataForecast.DailyForecasts[0].Night.IconPhrase} for tonight
      </div>
      <div class="time-issued mt-5">
        ${friendlyDate}
        </div>
      </div>
      `;

}
