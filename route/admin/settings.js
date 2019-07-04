const {Settings} = require("../../model/settings");

module.exports = async(req,res) => {
    const settings = await Settings.findOne({author: req.session.user._id});
    console.log(settings);

    res.send(settings);
}