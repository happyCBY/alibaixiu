//连接mongodb数据库
const mongoose = require("mongoose");

const config = require("config");

mongoose.connect(`mongodb://alibaixiu:${config.get("pwd")}@localhost/alibaixiu`,{useNewUrlParser: true,useCreateIndex:true,useFindAndModify:false})
  .then(() => console.log("数据库连接成功"))
  .catch(err => console.log("数据库连接失败"));