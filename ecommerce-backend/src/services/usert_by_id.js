const userModel = require("../models/usermodel")
const getuserbyid = (id) => {
    try {

        return userModel.findById(id)
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = getuserbyid
