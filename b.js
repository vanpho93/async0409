const request = require('request');

const url = 'http://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=';

request(url + 'Saigon', (err, response, body) => {
    const temp = JSON.parse(body).main.temp;
    console.log(temp);
});
