module.exports = (req, res) => {
    //清除Session
    req.session.destroy(function () {
        //删除cookie
        res.clearCookie('connect.sid');
        res.send(true);
    });

}