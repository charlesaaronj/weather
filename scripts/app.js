const weather = new Weather();
const radioForm = document.querySelector('form');
const current = document.querySelector('.current');
const time = document.querySelector('.time');
const today = document.querySelector('.today');
const body = document.querySelector('body');


radioForm.addEventListener('submit', e => {
    e.preventDefault();
    const resort = document.getElementById('select').value;
    weather.getTime(resort)
    .then(dataTime => {
        updateTime(dataTime);
    })
    .catch(err => {
        console.log(err);
    })
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
const updateTime = (dataTime) => {
    let readableDate = moment.parseZone(dataTime.datetime).format('l LT');
    let timeZone = dataTime.abbreviation;
    time.innerHTML = `
    <div class="tile-style">
    <div class="is-size-6 has-text-weight-medium">
    ${readableDate} ${timeZone}
      </div>
      </div>
      `;
};
const updateConditions = (dataConditions) => {
    var time;
    if(dataConditions.IsDayTime){
        var time = `
        <div class="is-size-5 my-3">
   Day Light
    </div>
        `;
     } else {
        var time = `
        <div class="is-size-5 my-3">
   Night
    </div>
        `;
     };
    current.innerHTML = `
    <div class="tile-style">
    <div class="is-size-6 has-text-weight-medium"><a href="${dataConditions.Link}" target="_blank">Current</a></div>
    ${time}
    <div class="is-size-1">
      <span>${dataConditions.Temperature.Imperial.Value}</span>
      <span>&deg;F</span>
      </div>
      <img class="my-0" src="http://charlesaaronj.com/apps/weather/img/icons/${dataConditions.WeatherIcon}.svg">
      <div class="is-size-5">${dataConditions.WeatherText}</div>
      </div>
      `;
};
const updateForecast = (dataForecast) => {
    const timeStamp =  `${dataForecast.DailyForecasts[0].Date}`;
    let friendlyDate = moment.parseZone(timeStamp).format('l LT');
    today.innerHTML = `
    <div class="tile-style">
    <div class="is-size-6 has-text-weight-medium"><a href="${dataForecast.DailyForecasts[0].Link}" target="_blank">Today</a></div>
    <div class="is-size-2 mt-3">
      <span>${dataForecast.DailyForecasts[0].Temperature.Minimum.Value}</span>
      <span>&deg;F</span> - 
      <span>${dataForecast.DailyForecasts[0].Temperature.Maximum.Value}</span>
      <span>&deg;F</span>
    </div>
    <img class="my-0" src="http://charlesaaronj.com/apps/weather/img/icons/${dataForecast.DailyForecasts[0].Day.Icon}.svg">
    <div class="is-size-5 mx-6">
      ${dataForecast.DailyForecasts[0].Day.IconPhrase} during day
      </div>
      <img class="my-0" src="http://charlesaaronj.com/apps/weather/img/icons/${dataForecast.DailyForecasts[0].Night.Icon}.svg">
      <div class="is-size-5"">
      ${dataForecast.DailyForecasts[0].Night.IconPhrase} tonight
      </div>
      <div class="is-size-6 mt-5">
        Issued ${friendlyDate}
        </div>
      </div>
      `;

}