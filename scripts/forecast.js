class Weather {
    constructor(){
        this.apiKey = 'NRZaXfKvT22VZYxPGdGr3eGcAFXgB2QI';
        this.conditionsURI = 'https://dataservice.accuweather.com/currentconditions/v1/';
        this.forecastURI = 'http://dataservice.accuweather.com/forecasts/v1/daily/1day/';
        this.timeURI = 'http://worldtimeapi.org/api/timezone/';
        this.zone = {};
    }
        async getConditions(resort){
            const query = `${resort}?apikey=${this.apiKey}`;
            const response = await fetch(this.conditionsURI + query);    
            const dataConditions = await response.json();
            return dataConditions[0];
        }
        async getForecast(resort){
            const query = `${resort}?apikey=${this.apiKey}`;
            const response = await fetch(this.forecastURI + query);     
            const dataForecast = await response.json();
            return dataForecast;
        }
        async getTime(resort){
            if (resort === '2257551') {
                this.zone = 'America/New_York';
            } if (resort === '327150') {
                this.zone = 'America/Los_Angeles';
            } if (resort === '3424999') {
                this.zone = 'Asia/Shanghai';
            } if (resort === '216947') {
                this.zone = 'Asia/Tokyo';
            } if (resort === '1123451') {
                this.zone = 'Asia/Hong_Kong';
            } if (resort === '154118') {
                this.zone = 'Europe/Paris';
            }
            console.log(this.zone);
            const response = await fetch(this.timeURI + this.zone);
            const dataTime = await response.json();
            console.log(dataTime);
            return dataTime;
        }
    }
