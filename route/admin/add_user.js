const {User,checkRole} = require("../../model/user");

//密码加密模块
const bcrypt = require("bcrypt");
module.exports=async(req,res)=>{
    //用户表单验证
    try {
        await checkRole(req.body);
    } catch (err) {
        return res.status(400).send(err.message);
    }
    const alluser = await User.find();
    for(var index in alluser){
        if(alluser[index].email == req.body.email){
            return res.status(400).send("邮箱已被注册");
        }
    }
    //密码加密
    var str = await bcrypt.genSalt(10);
    req.body.pwd = await bcrypt.hash(req.body.pwd,str);
    //添加字段

    await User.create(req.body);

    res.send("添加用户成功");

}