const {Categories} = require("../../model/categories");

module.exports = async(req,res) => {
    const user = await Categories.find();
    res.send(user);
}