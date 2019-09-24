const express = require('express');
const Router = express.Router();
const { mongo } = require('../db');
const { formatData, token } = require('../utils')


// 查询用户

Router.get('/aaa', async (req, res) => {
    let result = await mongo.find('user', { age: '18' })

    res.send(result)
})

//注册
Router.post('/reg', async (req, res) => {
    let { username, passworld } = req.body;
    let result = await mongo.create('user', [{ username, passworld, regtime: Date.now() }])
    res.send(result)
})
//验证名字重复
Router.get('/check', async (req, res) => {
    let { username } = req.query;
    let result = await mongo.find('user', { username })
    // res.send(result)
    if (result.length) {
        res.send(formatData({ code: 0 }))
    } else {
        res.send(formatData());
    }
})
//登录
Router.post('/login', async (req, res) => {
    let { username, passworld, mdl } = req.body;
    let result = await mongo.find('user', { username, passworld })
    // res.send(result)
    if (result.length) {
        let Authorization;
        if (mdl) {
            Authorization = token.create(username)
            // Authorization = 789;
        }
        res.send(formatData({ data: Authorization }));
    } else {
        res.send(formatData({ code: 0 }))
    }
})
module.exports = Router;