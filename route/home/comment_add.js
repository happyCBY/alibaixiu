const {Comment} = require("../../model/comment");

module.exports = async(req,res) => {

    //判断用户是否登录
    if(req.session.user) {
        //存储评论
        await Comment.create({
            where: req.body.where,
            connect: req.body.content,
            status: req.body.status,
            author: req.session.user._id
        });



        res.send("评论成功");
    }else {
        res.status(400).send("请先登录账号");
    }

}