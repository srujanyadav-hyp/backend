const login = require("../services/login_ser")
const Login = async (request, response) => {
    try {
        const { email, password } = request.body
        console.log(email, password)
        const message = await login(email, password)
        response.status(message.status).json({
            "message": message.message,
            "token": message.token
        })
    } catch (error) {
        response.status(500).json({
            "message": "internal server error",
            "error": error.message
        })
    }
}

module.exports = Login