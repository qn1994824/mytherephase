const express = require('express');
const Router = express.Router();
// const mysql = require('mysql');
const { mysql: query } = require('../db');

// 使用链接对象来链接数据库
// 创建链接对象，并配置参数
// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'h51907'
// });


//请求调用数据库
// Router.route('/:id')
//     .post((req, res) => {

//     })
Router.route('/ccc')
    .get(async (req, res) => {
        console.log(666)
        // let { id } = req.params;
        let sql = `SELECT * FROM qntable `
        let result = await query(sql);
        res.send(result);
    })

module.exports = Router;