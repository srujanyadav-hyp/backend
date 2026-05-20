const getuserbyid = require('../services/usert_by_id')
const mongoose = require('mongoose')
const getUserById = async (request, response) => {

    try {
        const { id } = request.params
        if (!mongoose.Types.ObjectId.isValid(id)) {

            return response.status(400).json({
                message: "invalid user id"
            })

        }
        else if (!id) {
            response.status(400).json({
                "message": "id is required",
                "id": id
            })
        } else {
            const user = await getuserbyid(id)
            if (user === null) {
                response.status(404).json({
                    "message": "user not found",
                    "user": user,
                })
            }
            else {
                response.status(200).json({
                    "message": "users detailes are get by his user id",
                    "user": user,

                })
            }
        }

    } catch (error) {
        response.status(500).json({
            "message": "internal server error",
            "error": error.message
        })
    }

}

module.exports = getUserById
