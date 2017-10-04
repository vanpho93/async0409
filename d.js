const request = require('request');

function congPromise(a, b) {
    return new Promise((resolve, reject) => {
        const isNumbers = typeof a === 'number' && typeof b === 'number';
        if (!isNumbers) return reject(new Error('Type error'));
        const url = `http://localhost:3000/tinh/CONG/${a}/${b}`;
        request(url, (err, response, body) => {
            if (err) return reject(err);
            resolve(+body);
        });
    });
}

function nhanPromise(a, b) {
    return new Promise((resolve, reject) => {
        const isNumbers = typeof a === 'number' && typeof b === 'number';
        if (!isNumbers) return reject(new Error('Type error'));
        const url = `http://localhost:3000/tinh/NHAN/${a}/${b}`;
        request(url, (err, response, body) => {
            if (err) return reject(err);
            resolve(+body);
        });
    });
}

function chiaPromise(a, b) {
    return new Promise((resolve, reject) => {
        const isNumbers = typeof a === 'number' && typeof b === 'number';
        if (!isNumbers) return reject(new Error('Type error'));
        if (b === 0) return reject(new Error('Divide by 0'));
        const url = `http://localhost:3000/tinh/CHIA/${a}/${b}`;
        request(url, (err, response, body) => {
            if (err) return reject(err);
            resolve(+body);
        });
    });
}

congPromise(4, '5')
.then(x => console.log('kq la: ' + x))
.catch(y => console.log('Loi: ' + y));
