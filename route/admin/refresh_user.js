const {User} = require("../../model/user");

module.exports= async (req,res)=>{
    const user = await User.find();
    res.send(user);
}