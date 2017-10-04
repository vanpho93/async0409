const request = require('request');

const url = 'http://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=';

// request(url + 'Saigon', (err, response, body) => {
//     temp = JSON.parse(body).main.temp;
// });

function getTempByCityName(cityName, cb) {
    request(url + cityName, (err, response, body) => {
        if (err) return cb(err, null);
        temp = JSON.parse(body).main.temp;
        cb(null, temp);
    });
}

// getTempByCityName('Saigon', (err, temp) => {
//     if(err) return console.log(err);
//     console.log(temp);
// });
// getTempByCityName('Hanoi', t => console.log('Hanoi: ' + t));
// getTempByCityName('Tokyo');
// console.log(sgTemp);

function getTempPromise(cityName) {
    return new Promise((resolve, reject) => {
        request(url + cityName, (err, response, body) => {
            if (err) return reject(err);
            temp = JSON.parse(body).main.temp;
            resolve(temp);
        });
    });
}

getTempPromise('Danang')
.then(temp => console.log(temp))
.catch(err => console.log(err.message));
