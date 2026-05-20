const loggerMiddleware = (request, response, next) => {
    console.log("method :", request.method)
    console.log("url :", request.url)
    next()
}

module.exports = loggerMiddleware