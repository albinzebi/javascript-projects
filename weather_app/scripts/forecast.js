class Forecast{
    constructor(key) {
        this.key = 'eADTw2b4MO2MhzuUhcd9iAXwbVWzuGIl';
        this.weatherURI = 'https://dataservice.accuweather.com/currentconditions/v1/';
        this.citytURI = 'https://dataservice.accuweather.com/locations/v1/cities/search';

    }
    async updateCity(city) {
        const cityDets = await this.getCity(city);
        const weather = await this.getWeather(cityDets.Key);
        return { cityDets, weather };
    }
    async getCity(city) {
        const query = `?apikey=${this.key}&q=${city}`;
        const response = await fetch(this.citytURI + query);
        const data = await response.json();
        return data[0];
    }
    async getWeather(id) {
        const query = `${id}?apikey=${this.key}`;
        const response = await fetch(this.weatherURI + query);
        const data = await response.json();
        return data[0];
    }
}



