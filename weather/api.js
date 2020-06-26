const axios = require('axios').default;

const apiKey = 'your-api-key-here-xxxxxxxxxxxxxx';

const getWeather = async(city) => {
    return await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
}

module.exports = {
    getWeather
}