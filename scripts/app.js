const conditions = new Conditions();

const radioForm = document.querySelector('form');
const current = document.querySelector('.current');
const time = document. querySelector('.time');
const moreInfo = document. querySelector('.more-info');
const body = document. querySelector('body');


radioForm.addEventListener('submit', e => {
    e.preventDefault();
    const resort = document.getElementById('select').value;
    console.log(resort);
    conditions.getWeather(resort)
    .then(data => {
        updateUI(data);
    })
    .catch(err => {
        console.log(err);
    });
});

const updateUI = (data) => {
    current.innerHTML = `
    <div class="label mt-5">Current Conditions</div>
    <div class="is-size-1">
      <span>${data.Temperature.Imperial.Value}</span>
      <span>&deg;C</span>
      </div>
    <div class="is-size-5">${data.WeatherText}</div>
      `;
    if(data.IsDayTime){
        console.log('Daytime')
        body.classList.add("day");
        body.classList.remove("night");
        time.innerHTML = `<div class="is-size-5">Day</div>`;
     } else {
        console.log('Nighttime')
        body.classList.add("night");
        body.classList.remove("day");
        time.innerHTML = `<div class="is-size-5">Night</div>`;
     };
    
    moreInfo.innerHTML = `
    <div class="is-size-6">
    <a href="${data.Link}" target="_blank">
    More Info</a></div>`;
    

};

