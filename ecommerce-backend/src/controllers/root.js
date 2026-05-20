const getRoot = (request, response) => {
    response.json({
        "message": "root route"
    })
}

module.exports = getRoot
