const getProductById = (request, response) => {
    const { id } = request.params
    response.json({
        "message": "products get route",
        "id": id
    })
}

module.exports = getProductById