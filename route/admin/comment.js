const {Comment} = require("../../model/comment");

const pagination = require("mongoose-sex-page");
module.exports = async(req,res) => {
    var page = req.params.page||1;
    var data = await pagination(Comment).find().page(page).size(3).display(3).populate("author where").exec();

    res.send(data);
}