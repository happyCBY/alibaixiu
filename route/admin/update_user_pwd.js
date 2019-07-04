const { User, checkUserPwd } = require("../../model/user");

const bcrypt = require("bcrypt");

module.exports = async (req, res) => {
    var { pwd, old_pwd } = req.body;
    var login_pwd = req.session.user.pwd;
    console.log(pwd);

    try {
        await checkUserPwd({ pwd });
    } catch (err) {
        return res.status(400).send(err.message);
    }
    if (await bcrypt.compare(old_pwd, login_pwd)) {
        const str = await bcrypt.genSalt(10);
        const new_pwd = await bcrypt.hash(pwd, str);
        await User.updateOne({ _id: req.session.user._id }, { pwd: new_pwd });

        //清除Session
        req.session.destroy(function () {
            //删除cookie
            res.clearCookie('connect.sid');
            return res.send("修改成功");
        });

    } else {
        return res.status(400).send("原密码输入错误，请重新输入");
    }
}