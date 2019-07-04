const {Slides} = require("../../model/slides");


module.exports = async(req,res) => {
    await Slides.create(req.body);
    res.send("添加成功");
}