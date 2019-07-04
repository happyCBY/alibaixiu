const mongoose = require("mongoose");

const settingsRole = mongoose.Schema({
    //网站图标
    logo: {
        type: String
    },
    //站点名称
    title: {
        type: String,
        required: true
    },
    //是否开启评论功能
    ifComment: {
        type: Number,
        enum: [1,0],
        required: true
    },
    //评论是否要经过人工审核
    review:{
        type: Number,
        enum: [1,0],
        required: true
    },
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
});

const Settings = mongoose.model("Settings",settingsRole);

module.exports = {
    Settings
}