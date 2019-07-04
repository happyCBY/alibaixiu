const {Article} = require("../../model/article");

module.exports = async(req,res) => {
    const article = await Article.find({state:1}).limit(4).sort("-createAt").populate("category author");
    res.send(article);
}