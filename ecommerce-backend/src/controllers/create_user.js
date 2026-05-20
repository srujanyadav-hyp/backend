const createUser = require("../services/created_user_service")
const createuser = async (request, response) => {
    const { name, email, password } = request.body

    try {
        if (!name || !email || !password) {
            response.status(400).json({
                "message": "all fields are required",
                "name": name,
                "email": email

            })
        } else {
            const usercreation = await createUser(name, email, password)
            response.status(201).json({
                "message": "user created successfully",
                "user_id": usercreation._id
            })
        }
    } catch (error) {
        response.status(500).json({
            "message": "internal server error",
            "error": error.message
        })
    }

}

module.exports = createuser;