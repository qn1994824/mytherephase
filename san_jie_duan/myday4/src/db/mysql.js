const mysql = require('mysql');


var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'h51907',
    multipleStatements: true
});

function query(sql) {
    return new Promise((resolve, reject) => {
        pool.query(sql, (error, results, fields) => {
            if (error) {
                reject(error)
            };
            resolve(results);
        })
    })
}

module.exports = query;