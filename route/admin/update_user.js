const {User}  = require("../../model/user");

const bcrypt = require("bcrypt");

const fs = require("fs")

const path = require("path");

module.exports = async(req,res) => {
    //查找修改的用户
    const user = await User.findOne({_id:req.body.id});
    //查询修改用户的密码
    const pwd = user.pwd;
    //比对修改用户密码是否正确
    if(await bcrypt.compare(req.body.pwd,pwd)) {
        const {avatar} = req.body;
        if (avatar) {
            //删除项目中对应的图片
            fs.unlink(path.join(__dirname, "../", "../", "public", user.avatar), (err, result) => {
                if (err != null) {
                    console.log(err);
                }
                else {
                    console.log(result);
                }
            });
        }

        req.body.pwd = pwd;
        await User.updateOne({_id:req.body.id},req.body);
        res.send("修改用户成功");
    }else {
        res.send("密码输入错误");
    }
}