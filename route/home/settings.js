const {Settings} = require("../../model/settings");

module.exports = async(req,res) => {
    const settings = await Settings.findOne();

    res.send(settings);
}