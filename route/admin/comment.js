const {Comment} = require("../../model/comment");

const pagination = require("mongoose-sex-page");
module.exports = async(req,res) => {
    var page = req.params.page||1;
    var data = await pagination(Comment).find().page(page).size(2).display(3).populate("where author").exec();
    res.send(data);
}