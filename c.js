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

cong(5, 10, (err, kq) => {
    if(err) return console.log(err.message);
    console.log(kq);
});
