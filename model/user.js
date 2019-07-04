const mongoose = require("mongoose");

//引入Joi模块
const Joi = require("@hapi/joi");

const bcrypt = require("bcrypt");
//创建用户集合规则
const userRole = mongoose.Schema({
    username: {
        type: String,
        minlength: 2,
        maxlength: 10,
        required: [true, "请输入用户名"]
    },
    email: {
        type: String,
        required: [true, "请输入邮箱"]
    },
    pwd: {
        type: String,
        minlength: 6,
        required: [true, "请输入密码"]
    },
    activation: {
        type: Number,
        enum: [0, 1],
        default: 1
    },
    role: {
        type: String,
        enum: ["normal", "admin"],
        default: "normal"
    },
    avatar: {
        type: String
    }

    //创建用户集合
});
const User = mongoose.model("User", userRole);

// 创建一个超级管理员
// async function run() {
//     const str = await bcrypt.genSalt(10);
//     const new_password = await bcrypt.hash("123456", str);
//     User.create({
//         username: "cby",
//         email: "1765094230@qq.com",
//         pwd: new_password,
//         activation: 1,
//         role: "admin"
//     })
// }
// run();



async function checkRole(data) {

    //创建joi验证规则
    const schema = {
        username: Joi.string().min(2).max(18).required().error(new Error("用户名格式错误")),
        //email(): 字段必须是邮箱
        email: Joi.string().required().email().error(new Error("邮箱格式错误")),
        pwd: Joi.string().required().regex(/^[a-zA-Z0-9]{6,}$/).error(new Error("密码格式错误")),
        activation: Joi.number().valid(1, 0),
        role: Joi.string().valid("normal", "admin"),
        avatar: Joi.string()
    }

    return Joi.validate(data, schema);
}
async function checkUserPwd(data) {
    const schema = {
        pwd: Joi.string().required().regex(/^[a-zA-Z0-9]{6,}$/).error(new Error("密码格式错误")),
    }
    return Joi.validate(data, schema);
}

module.exports = {
    User,
    checkRole,
    checkUserPwd
}