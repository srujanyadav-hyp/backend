const mongoose = require('mongoose')
const deleteuser = require("../services/delete_by_id")
const deleteUser = async (request, response) => {
    try {
        const { id } = request.params
        if (!mongoose.Types.ObjectId.isValid(id)) {
            response.status(400).json({
                "message": "this is the bad request"
            })
        } else {
            const message = await deleteuser(id);
            if (message) {
                response.status(200).json({
                    "message": `the account is delete for this ${id}`
                })
            } else {
                response.status(404).json({
                    "message": `the given ${id} is not found in the database `
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
module.exports = deleteUser