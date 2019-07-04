const {Article} = require("../../model/article");

module.exports = async(req,res) => {
    const article = await Article.findOne({_id: req.params.id}).populate("author category");
    res.send(article);
}