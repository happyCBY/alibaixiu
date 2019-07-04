const {Article} = require("../../model/article");

module.exports = async(req,res) => {

    var text = req.params.title;

    if(text.trim().length>0) {
        const regex = new RegExp(escapeRegex(text),"gi");
        const article = await Article.find({title:regex}).populate("author category");
        res.send(article);
    }
    else {
        res.status(400).send("请输入搜索词");
    }
    //将字符串里面的特殊字符去掉
    function escapeRegex(text){
        return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
    }
}