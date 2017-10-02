const request = require('request');

function cong(a, b, cb) {
    const isNumbers = typeof a === 'number' && typeof b === 'number';
    if (!isNumbers) return cb(new Error('Type error'));
    const url = `http://localhost:3000/tinh/CONG/${a}/${b}`;
    request(url, (err, response, body) => {
        if (err) return cb(err);
        cb(null, body);
    });
}

function nhan(a, b, cb) {
    const isNumbers = typeof a === 'number' && typeof b === 'number';
    if (!isNumbers) return cb(new Error('Type error'));
    const url = `http://localhost:3000/tinh/NHAN/${a}/${b}`;
    request(url, (err, response, body) => {
        if (err) return cb(err);
        cb(null, body);
    });
}

function chia(a, b, cb) {
    const isNumbers = typeof a === 'number' && typeof b === 'number';
    if (!isNumbers) return cb(new Error('Type error'));
    if (b === 0) return cb(new Error('Divide by 0'));
    const url = `http://localhost:3000/tinh/CONG/${a}/${b}`;
    request(url, (err, response, body) => {
        if (err) return cb(err);
        cb(null, body);
    });
}
