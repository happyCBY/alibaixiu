const {Categories} = require("../../model/categories");

module.exports = async(req,res) => {
    //查询所有分类
    const categories = await Categories.find({});

    res.send(categories);
}