const request = require('request');

function cong(a, b, cb) {
    const isNumbers = typeof a === 'number' && typeof b === 'number';
    if (!isNumbers) return cb(new Error('Type error'));
    const url = `http://localhost:3000/tinh/CONG/${a}/${b}`;
    request(url, (err, response, body) => {
        if (err) return cb(err);
        cb(null, +body);
    });
}

function nhan(a, b, cb) {
    const isNumbers = typeof a === 'number' && typeof b === 'number';
    if (!isNumbers) return cb(new Error('Type error'));
    const url = `http://localhost:3000/tinh/NHAN/${a}/${b}`;
    request(url, (err, response, body) => {
        if (err) return cb(err);
        cb(null, +body);
    });
}

function chia(a, b, cb) {
    const isNumbers = typeof a === 'number' && typeof b === 'number';
    if (!isNumbers) return cb(new Error('Type error'));
    if (b === 0) return cb(new Error('Divide by 0'));
    const url = `http://localhost:3000/tinh/CHIA/${a}/${b}`;
    request(url, (err, response, body) => {
        if (err) return cb(err);
        cb(null, +body);
    });
}

function tinhDienTichHinhThang(a, b, h, cb) {
    cong(a, b, (errCong, tong) => {
        if (errCong) return cb(errCong);
        nhan(tong, h, (errNhan, tich) => {
            if (errNhan) return cb(errNhan);
            chia(tich, 2, (errChia, kq) => {
                if (errChia) return cb(errChia);
                cb(null, kq);
            });
        });
    });
}

tinhDienTichHinhThang(4, 5, 6, (err, kq) => console.log(kq));
