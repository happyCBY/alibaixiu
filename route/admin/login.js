const {User}  = require("../../model/user");
const bcrypt = require("bcrypt");

module.exports = async (req,res)=>{
    const user = await User.findOne({email: req.body.email});

    //判断用户邮箱是否存在
    if(user) {
        if(await bcrypt.compare(req.body.password,user.pwd)) {
            req.session.user = user;
            res.send(true);
        }
        else {
            res.send(false);
        }
    }else {
        res.send(false);
    }
}