const {Categories,checkRole} = require("../../model/categories");

module.exports = async(req,res) => {
    //判断提交的表单是否符合规则
    try {
        console.log(req.body);

        await checkRole(req.body);
    }catch(err) {
        return res.send(err.message);
    }
    const user = await Categories.find();
    //查看文章标题是否重复
    for(var attr in user) {
        if(user[attr].title==req.body.title) {
            return res.status(400).send("文章标题重复请重新输入");
        }
    }
    await Categories.create(req.body);
    res.send("添加成功");
}
