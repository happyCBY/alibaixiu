const {Categories} = require("../../model/categories");

module.exports = async(req,res) => {
    //解析发送过来的参数
    var arr = req.params.id.split("-");
    for (var attr in arr) {
        await Categories.deleteOne({_id:arr[attr]});
    }
    res.send("删除成功");
}