const {Article} = require("../../model/article");

//引用分页模块
const pagination = require("mongoose-sex-page");

module.exports = async(req,res) => {
    var page = req.body.page||1;
    var article;
    req.body.title = req.body.title||0;

    if(req.body.title == 0) {
        if(req.body.state=="2") {
            article = await pagination(Article).find().page(page).size(2).display(3).populate("category author").exec();
        }else {
            article = await pagination(Article).find({state: req.body.state}).page(page).size(2).display(3).populate("category author").exec();
        }
    }else {
        if(req.body.state=="2") {
            article = await pagination(Article).find({category:req.body.title}).page(page).size(2).display(3).populate("category author").exec();
        }else {
            article = await pagination(Article).find({category:req.body.title,state: req.body.state}).page(page).size(2).display(3).populate("category author").exec();
        }
    }
    console.log(article);

    res.send(article);
}