const jwt = require('jsonwebtoken');
const { secret } = require('../config.json')
function create(data, expiresIn = 30) {
    console.log(data)
    let token = jwt.sign({ data }, secret, { expiresIn });
    return token;
}

function verify(token) {
    let res;
    try {
        let result = jwt.verify(token, secret);
        console.log('token校验：', result)
        res = true;
    } catch (err) {
        res = false;
    }
    return res;
}
module.exports = {
    create,
    verify
}