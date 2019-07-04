const mongoose = require("mongoose");

const commentRole = mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    connect: {
        type: String,
    },
    where: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Article"
    },
    time:{
        type: Date,
        default: Date.now()
    },
    status: {
        type: Number,
        enum: [0,1]
    }
});

const Comment = mongoose.model("Comment",commentRole);

// // 创建测试评论
// Comment.create({
//     author:"5d19bf57e0daa434c8442eab",
//     connect: "哈哈",
//     where: "5d1c2377d23f2e1528d82eb8",
//     time: "2019-07-03 08:00:00.000",
//     status: 0
// });

module.exports = {
    Comment
}