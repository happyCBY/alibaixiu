const {Settings} = require("../../model/settings");

module.exports = async(req,res) => {
    console.log(req.body);

    const {title,logo,ifComment,review} = req.body;
    const id = req.session.user._id;
    const length = (await Settings.find({author:id})).length;
    //判断该用户是否已经设置了网站属性
    if(length!=0) {

       await Settings.updateOne({author:id},req.body);

    }else {
        await Settings.create({
            title,
            logo,
            ifComment,
            review,
            author:id
        })
    }
    res.send("设置成功");
}