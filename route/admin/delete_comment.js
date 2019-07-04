const {Comment} = require("../../model/comment");

module.exports = async(req,res) => {
    await Comment.deleteOne({_id:req.params.id});
    res.send("删除成功");
}