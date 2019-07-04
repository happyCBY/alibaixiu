const mongoose = require("mongoose");

const slidesRole = mongoose.Schema({
    img: {
        type: String,
    },
    text: {
        type: String,
    },
    link: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Article"
    }
});

const Slides = mongoose.model("Slides",slidesRole);


module.exports = {
    Slides
}