const {Article} = require("../../model/article");

module.exports = async(req,res) => {
    const article = await Article.find({});


    const arr = [];
    for(var i = 0; i < 5; i++) {
        if(article.length>0) {
            const num = article.length;
            const random = Math.floor(Math.random()*num);
            arr.push(article.splice(random,1));
        }else {
            break;
        }
    }
    res.send(arr);

}