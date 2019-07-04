const express = require('express');

const admin = express.Router();

//登录验证
admin.post("/login",require("./admin/login"));
//退出登录
admin.get("/sign_out",require("./admin/sign_out"));
//解析图片参数，返回图片地址
admin.post("/img_add",require("./admin/img_add"));
//添加用户
admin.post("/user",require("./admin/add_user"));
//刷新列表
admin.get("/user",require("./admin/refresh_user"));
//编辑页面渲染
admin.get("/update/:id",require("./admin/update"));
//修改用户信息
admin.post("/update",require("./admin/update_user"));
//删除用户信息
admin.delete("/user",require("./admin/delete_user"));
//修改用户密码
admin.put("/update_user_pwd",require("./admin/update_user_pwd"));

//添加文章分类
admin.post("/categories",require("./admin/add_categories"));
//刷新文章分类列表
admin.get("/categories",require("./admin/categories"));
//修改文章分类
admin.put("/categories",require("./admin/update_categories"));
//渲染文章分类页面
admin.get("/categories/:id",require("./admin/update_categories_page"));
//删除文章分类
admin.delete("/categories/:id",require("./admin/delete_categories"));

//获取文章分类
admin.get("/getSort",require("./admin/getSort"));
//添加文章
admin.post("/article",require("./admin/article_add"));
//获得文章列表
admin.post("/article_screen",require("./admin/article_get"));
//删除文章
admin.delete("/article/:id",require("./admin/delete_article"));
//渲染修改文章页面
admin.get("/modify_show/:id",require("./admin/modify_show"));
//修改文章
admin.put("/article",require("./admin/modify_article"));

//显示评论列表
admin.get("/comment/:page",require("./admin/comment"));
//批准/驳回评论
admin.put("/comment",require("./admin/comment_status"));
//删除评论
admin.delete("/comment/:id",require("./admin/delete_comment"));

//获得网站统计数据
admin.get("/statistics",require("./admin/statistics"));

//网站轮播图上传
admin.post("/slides",require("./admin/add_slides"));
//网站轮播图显示
admin.get("/slides",require("./admin/slides"));
//删除网站轮播
admin.delete("/slides/:id",require("./admin/slides_delete"));

//获得网站设置数据
admin.get("/settings",require("./admin/settings"));
//添加网站设置
admin.post("/settings",require("./admin/settings_add"));

//获得用户头像
admin.get("/userImg",require("./admin/userImg"));
module.exports = admin;