const {Article} = require("../../model/article");

module.exports = async(req,res) => {
    const article = await Article.find({category: req.params._id}).populate("author category");
    res.send(article);
}