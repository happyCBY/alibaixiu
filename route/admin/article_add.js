const {Article} = require("../../model/article");

module.exports = async(req,res) => {

    if(req.body.createAt.trim().length == 0) {
        req.body.createAt = Date.now();
    }
    req.body.author = req.session.user._id;
    await Article.create(req.body);
    res.send("发布文章成功");
}