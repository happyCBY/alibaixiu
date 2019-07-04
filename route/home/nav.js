const {Categories} = require("../../model/categories");

module.exports = async(req,res) => {
    const categories = await Categories.find();
    res.send(categories);
}