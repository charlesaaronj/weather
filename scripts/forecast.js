class Conditions {
    constructor(){
        this.apiKey = 'mRoY47MbBZ4snv1ND35KgnWXafVI5ImR';
        this.weatherURI = 'https://dataservice.accuweather.com/currentconditions/v1/';
    }

        async getWeather(resort){
    
            const query = `${resort}?apikey=${this.apiKey}`;
        
            const response = await fetch(this.weatherURI + query);
        
            const data = await response.json();
            
            console.log('City key used to return current conditions')

            console.log(data);

            return data[0];
        }
    }
