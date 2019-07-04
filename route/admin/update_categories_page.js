const {Categories} = require("../../model/categories");

module.exports = async (req,res) => {

    const categories = await Categories.findOne({_id: req.params.id});

    res.send(categories);
}