const express = require('express');

const home = express.Router();
//显示轮播图
home.get("/index_img",require("./home/index_img"));
//展示热门推荐
home.get("/hot_article",require("./home/hot_article"));
//展示最新数据
home.get("/newArticle",require("./home/newArticle"));
//展示随机推荐
home.get("/randerRecommend",require("./home/randerRecommend"));
//展示最新评论数据
home.get("/new_comment",require("./home/new_comment"));
//分类导航显示
home.get("/nav",require("./home/nav"));

//分类导航页面
home.get("/show_list/:_id",require("./home/show_list"));
//文章详情页面
home.get("/article/:id",require("./home/article"));
//实现点赞功能
home.get("/likes/:id",require("./home/likes"));
//实现搜索功能
home.get("/search/:title",require("./home/search"));

module.exports = home;