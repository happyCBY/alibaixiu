const mongoose = require("mongoose");

const articleRole = mongoose.Schema({
    //文章标题
    title: {
        type: String,
        required: true,
    },
    //文章状态  0为草稿，1为已发布
    state: {
        type: Number,
        enum: [0,1]
    },
    // 文章内容
    content:{
        type: String,
    },
    //文章分类
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Categories"
    },
    //文章封面
    thumbnail: {
        type: String
    },
    //创建时间
    createAt: {
        type: Date,
        default: Date.now()
    },
    //创建作者
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    meta: {
		// 看过数量
		views: { type: Number, default: 0 },
		// 喜欢数量
		likes: { type: Number, default: 0 },
		// 评论数量
		comments: { type: Number, default: 0 }
	}
});

const Article = mongoose.model("Article",articleRole);

module.exports = {
    Article
}