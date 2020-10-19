class Weather {
    constructor(){
        this.apiKey = 'xXdE6ee3pR133gS7zDSLHlxIzNncH6SE';
        this.conditionsURI = 'https://dataservice.accuweather.com/currentconditions/v1/';
        this.forecastURI = 'http://dataservice.accuweather.com/forecasts/v1/daily/1day/';
    }
        async getConditions(resort){
            const query = `${resort}?apikey=${this.apiKey}`;
            const response = await fetch(this.conditionsURI + query);     
            const dataConditions = await response.json();
            console.log(dataConditions);
            return dataConditions[0];
        }
        async getForecast(resort){
            const query = `${resort}?apikey=${this.apiKey}`;
            const response = await fetch(this.forecastURI + query);     
            const dataForecast = await response.json();
            console.log(dataForecast);
            return dataForecast;
        }
    }
