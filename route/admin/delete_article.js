const {Article} = require("../../model/article");

module.exports = async(req,res) => {
    const id = req.params.id;
    await Article.findOneAndDelete({_id: id});
    res.send("删除成功");
}