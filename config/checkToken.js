// I have a token in the header
// need to verify iof the token is valid
// if its valid, I need to set the logged in user for the req, res cycle

const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    let toekn = req.get('Authorization')
    if (token) {
        token = token.split(' ')[1]
        jwt.verify(toekn, process.env.SECRET, (error, decoded) => {
            req.user = err ? null : decoded.user
            req.exp = err ? null : new Date(decoded.exp * 1000)
        })
        return next()
    } else {
        req.user = null
        return next()
    }
}