const { Categories, checkRole } = require("../../model/categories");

module.exports = async(req, res) => {
    //判断提交的表单是否符合规则
    try {
        await checkRole({title: req.body.title,classname:req.body.classname});
    } catch (err) {
        return res.send(err.message);
    }
    const user = await Categories.find();
    //查看文章标题是否重复
    for (var attr in user) {
        if (user[attr].title == req.body.title) {
            return res.status(400).send("文章标题重复请重新输入");
        }
    }
    await Categories.updateOne({_id:req.body.id},{title: req.body.title,classname:req.body.classname});
    console.log();

    res.send("修改成功");

}