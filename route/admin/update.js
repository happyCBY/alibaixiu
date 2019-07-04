const {User} = require("../../model/user");

module.exports = async (req,res) => {
    const user = await User.findOne({_id: req.params.id});
    res.send(user);
}