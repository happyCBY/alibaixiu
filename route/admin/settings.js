const {Settings} = require("../../model/settings");

module.exports = async(req,res) => {
    const settings = await Settings.findOne({author: req.session.user._id});

    res.send(settings);
}