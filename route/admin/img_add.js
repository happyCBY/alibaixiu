const formidable = require("formidable");
const path = require("path");

module.exports = (req, res) => {

    //创建表单解析对象
    const form = new formidable.IncomingForm();
    //设置文件上传路径
    form.uploadDir = path.join(__dirname, "../", "../", "public", "uploads");
    //是否保留表单上传文件得扩展名,默认是不保存
    form.keepExtensions = true;
    //解析表单
    form.parse(req, (err, fields, files) => {
        ///判断是用户头像还是文章缩略图

        const img_path = files.avatar.path.split("public")[1];
        //返回图片地址
        res.send(img_path);
    });
}