const jwt = require('jsonwebtoken')
require('dotenv').config()
const authenticate = (request, response, next) => {
    const token = request.headers["authorization"]
    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET)
        request.user = decode
        next()
    } catch (error) {
        response.status(401).json({
            message: "you are not authorized"
        })

    }
}
module.exports = authenticate