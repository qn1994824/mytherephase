// 引入模块
const express = require('express');
// 引入json文件
const { PORT } = require('./config.json');
const allRouter = require('./router');

// 实例化express模块
const app = express();

//静态资源服务器
app.use(express.static('./'))

app.use(allRouter);

// 监听路由
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})