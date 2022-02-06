module.exports = (req, res, next) => {
    if(req.cookies.color){
        req.session.bgColor = req.cookies.color
        res.locals.bgColor = req.cookies.color
    }
    next()
}