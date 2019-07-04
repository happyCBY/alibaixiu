const {Slides} = require("../../model/slides");

module.exports = async(req,res) => {
    const slides = await Slides.find({});
    res.send(slides);
}