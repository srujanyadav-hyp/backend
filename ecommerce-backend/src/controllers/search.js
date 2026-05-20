const search = (request, response) => {
    const { value } = request.query
    response.json({
        "message": "search route",
        "value": value
    })
}
module.exports = search