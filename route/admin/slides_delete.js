const {Slides} = require("../../model/slides");

module.exports = async(req,res) => {
    await Slides.findOneAndDelete({_id: req.params.id});
    res.send("删除成功");
}