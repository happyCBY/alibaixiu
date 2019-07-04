const {User} = require("../../model/user");

const fs = require("fs")

const path = require("path");

module.exports = async(req,res) => {
    const user = await User.findOne({_id: req.body.id});
    await User.deleteOne({_id: req.body.id});
    if(user.avatar) {
        fs.unlink(path.join(__dirname, "../", "../", "public", user.avatar), (err, result) => {
            if (err != null) {
                console.log(err);
            }
            else {
                console.log(result);
            }
        });
    }

    res.send("删除成功");

}