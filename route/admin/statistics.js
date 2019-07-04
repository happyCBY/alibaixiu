const {Article} = require("../../model//article");
const {Comment} = require("../../model//comment");
const {Categories} = require("../../model/categories");

module.exports = async(req,res) => {
    //获得文章数量
    var article_length = (await Article.find({})).length;
    //获得未审核文章数量
    var article_notOK_length = (await Article.find({state: 0})).length;
    //获得文章分类数量
    var categories_length = (await Categories.find({})).length;
    //获得评论数量
    var comment_length = (await Comment.find({})).length;
    //获得未批准评论数量
    var comment_notOK_length = (await Comment.find({status:0})).length;

    res.send({
        article_length,
        article_notOK_length,
        categories_length,
        comment_length,
        comment_notOK_length
    })
}