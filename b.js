const request = require('request');

const url = 'http://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=';

// request(url + 'Saigon', (err, response, body) => {
//     temp = JSON.parse(body).main.temp;
// });

function getTempByCityName(cityName, cb) {
    request(url + cityName, (err, response, body) => {
        temp = JSON.parse(body).main.temp;
        cb(temp);
    });
}

getTempByCityName('Saigon', temp => console.log(temp));
getTempByCityName('Hanoi', t => console.log('Hanoi: ' + t));
// getTempByCityName('Tokyo');
// console.log(sgTemp);
