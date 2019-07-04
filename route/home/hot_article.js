const {Article} = require("../../model/article");

module.exports = async(req,res) => {
    const user = await Article.find({state:1}).limit(4).populate("author");
    res.send(user);
}