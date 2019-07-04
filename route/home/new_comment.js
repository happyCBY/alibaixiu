const {Comment} = require("../../model/comment");

module.exports = async(req,res) => {
    const comment = await Comment.find().sort("-time").limit(5).populate("author where");
    res.send(comment);
}