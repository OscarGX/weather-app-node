const weather = require('./weather/api');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        demand: true,
        desc: 'Dirección de la ciudad para obtener el clima'
    }
}).argv;

const loc = argv.direccion;

weather.getWeather(loc).then(data => {
    if (data.data.cod == 200) {
        console.log(`El clima de ${loc} es de ${data.data.main.temp}`);
    }
}).catch(e => {
    console.log(`Error, la ciudad no existe`);
});