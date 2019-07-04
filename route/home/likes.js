const {Article} = require("../../model/article");

module.exports = async(req,res) => {

    const article =await Article.findOne({_id: req.params.id});
    var num = article.meta.likes-0;
    num++;
    console.log(await Article.updateOne({_id: req.params.id},{meta: {likes:num}}));

    res.send("点赞成功");
}