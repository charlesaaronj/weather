const key = '7hAIaMwemko4fpnfpxXMaeVLMBPtuNJV';

//get weather - second task to do 

//take in id of city from getCity function
const getWeather = async (id) => {

    const base = 'https://dataservice.accuweather.com/currentconditions/v1/'

    const query = `${id}?apikey=${key}`;
    
    const response = await fetch(base + query);
    
    const data = await response.json();

    return data[0];

};

const getWaitTime = async () => {
   
    const response = await fetch("https://rapidapi.p.rapidapi.com/airports/test?APIKEY=test", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "tsa-wait-times.p.rapidapi.com",
            "x-rapidapi-key": "00b9396063msh63112912396a267p11359cjsne4006f385c31"
        }
    });
    
    const data = await response.json();

    console.log(data);

    return data;

};

getWaitTime();



// getWeather('331645');

// //get city id with API call - first task to do
// const getCity = async (city) => {
//     //base URL of the API endpoint
//     const base = 'https://dataservice.accuweather.com/locations/v1/cities/search';
//     //added on to end of URL
//     const query = `?apikey=${key}&q=${city}`;
//     //fetch base + query URL and returns promise
//     const response = await fetch(base + query);
//     //turns reponse into json data and returns promise
//     const data = await response.json();
// //taking the first element from the array of data (closest match)
//     return data[0];
    
// }
// getCity('cullman')
// .then(data => {
//     return getWeather(data.Key);
// }).then(data => {
//     console.log(data);
// }).catch(err => console.log(err));

