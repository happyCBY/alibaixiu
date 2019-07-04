const mongoose = require("mongoose");

//引入Joi模块
const Joi = require("@hapi/joi");

//创建文章分类集合规则
const categoriesRole = mongoose.Schema({
    classname: {
        type: String,
    },
    title: {
        type: String,
        required: [true, "请输入文章分类"]
    }
});
//创建文章分类集合
const Categories = mongoose.model("Categories", categoriesRole);

function checkRole(data) {
    //创建joi验证规则
    const schema = {
        classname: Joi.string(),
        title: Joi.string().required().error(new Error("请输入文章名"))
    }
    return Joi.validate(data, schema);
}

module.exports = {
    Categories,
    checkRole
}