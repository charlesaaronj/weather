class Forecast {
    constructor(){
        this.apiKey = 'mRoY47MbBZ4snv1ND35KgnWXafVI5ImR';
        this.weatherURI = 'https://dataservice.accuweather.com/currentconditions/v1/';
        this.cityURI = 'https://dataservice.accuweather.com/locations/v1/cities/search';
    }
    async updateCity(city){
            console.log('User searched for city: ' + (city));
            //returns promise so use await
            //functions in forecast.js - comes before app.js in HTML
            const cityDets = await this.getCity(city);
            const weather = await this.getWeather(cityDets.Key);
            //returns object with the city details and weather
            console.log('Conditions returned: City Details and Weather')
            //use object shorthand to shorten weather: weather
            return { cityDets, weather };
        }
        async getCity(city){
            //added on to end of URL
            const query = `?apikey=${this.apiKey}&q=${city}`;
            //fetch base + query URL and returns promise
            const response = await fetch(this.cityURI + query);
            //turns reponse into json data and returns promise
            const data = await response.json();
            //taking the first element from the array of data (closest match)
            console.log('API call returns city key associated to city name')
            return data[0];
        }
        async getWeather(id){
    
            const query = `${id}?apikey=${this.apiKey}`;
        
            const response = await fetch(this.weatherURI + query);
        
            const data = await response.json();
            console.log('City key used to return current conditions')
            console.log(data);
            return data[0];
        }
    }


// const apiKey = 'mRoY47MbBZ4snv1ND35KgnWXafVI5ImR';

// //get weather - second task to do 

// //take in id of city from getCity function
// const getWeather = async (id) => {

//     const base = 'https://dataservice.accuweather.com/currentconditions/v1/';
//     //const base = 'http://dataservice.accuweather.com/forecasts/v1/daily/1day/';

//     const query = `${id}?apikey=${apiKey}`;
    
//     const response = await fetch(base + query);
    
//     const data = await response.json();
//     console.log('City key used to return current conditions')
//     console.log(data);
//     return data[0];

// };

// // getWeather('331645');

// //1 - get city id with API call
// const getCity = async (city) => {
//     //base URL of the API endpoint
//     const base = 'https://dataservice.accuweather.com/locations/v1/cities/search';
//     //added on to end of URL
//     const query = `?apikey=${apiKey}&q=${city}`;
//     //fetch base + query URL and returns promise
//     const response = await fetch(base + query);
//     //turns reponse into json data and returns promise
//     const data = await response.json();
// //taking the first element from the array of data (closest match)
//     console.log('API call returns city key associated to city name')
//     return data[0];
    
// }

// getCity();


// getCity('cullman')
// .then(data => {
//     return getWeather(data.Key);
// }).then(data => {
//     console.log(data);
// }).catch(err => console.log(err));

