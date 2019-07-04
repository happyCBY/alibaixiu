const {Article} = require("../../model/article");

module.exports = async(req,res) => {
    var {title,content,thumbnail,category,createAt,state,_id} = req.body;
    await Article.updateOne({_id},{
        title,
        content,
        thumbnail,
        category,
        createAt,
        state,
        author: req.session.user._id
    });
    res.send("修改成功");
}