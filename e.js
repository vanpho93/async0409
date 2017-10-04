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

// (a + b) * h / 2

function tinhDienTich(a, b, h) {
    return Promise.all([
        congPromise(a, b),
        chiaPromise(h, '2')
    ]).then(x => nhanPromise(x[0], x[1]));
}

tinhDienTich(4, 5, 6)
.then(kq => console.log(kq))
.catch(err => console.log(err.message));
