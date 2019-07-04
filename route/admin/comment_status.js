const {Comment} = require("../../model/comment");

module.exports = async (req,res) => {

    await Comment.updateOne({_id: req.body.id},{status: req.body.status});
    res.send("修改成功");
}