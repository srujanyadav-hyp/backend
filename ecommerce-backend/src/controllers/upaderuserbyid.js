const updateduserwithid = require("../services/userupdate_byid")
const mongoose = require("mongoose")

const updateUser = async (request, response) => {

    try {
        const { id } = request.params
        const { name, email, password } = request.body
        if (!mongoose.Types.ObjectId.isValid(id)) {
            response.status(400).json({
                "message": "invalid user id"
            })
        }
        else if (!id) {
            response.status(401).json({
                "message": "for the updation we need used id"
            })
        }
        else if (!name && !email && !password) {
            response.status(401).json({
                "message": "for the updation we need used all the fields"
            })
        } else {
            const updateduser = await updateduserwithid(id, name, email, password)
            response.status(200).json({
                "message": updateduser,

            })

        }


    } catch (error) {
        response.status(500).json({
            "message": "internal server error",
            "error": error.message
        })
    }
}

module.exports = updateUser