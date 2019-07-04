const express = require('express');
const path = require("path");
const app = express();
require("./model/connect");
require("./model/user")
const session = require("express-session");
const bodyParser = require("body-parser");
const config = require("config");
//配置session  saveUninitialized: false配置代表当用户没有登录的时候访问服务器不要给用户存一个cookie
app.use(session(config.get("session")));

//拦截登录
app.use("/admin",require("./middleware/loginGuard"));

app.use(express.static(path.join(__dirname,"public")));

app.use(bodyParser.urlencoded({extended: false}));



//测试一下服务器是否成功，如果成功这块代码删掉
app.get('/',(req,res)=>{
    res.send('hello express');
})

app.use("/admin",require("./route/admin"));
app.use("/home",require("./route/home"));

app.listen(3000);
console.log('正在监听端口3000,http://127.0.0.1:3000')