const geet = require("../services/get_users")
const getUsers = async (request, response) => {
    try {
        const users = await geet()
        response.status(200).json({
            "message": "users found successfully",
            "users": users
        })
    } catch (error) {
        response.status(500).json({
            "message": "internal server error",
            "error": error.message
        })
    }
}
module.exports = getUsers