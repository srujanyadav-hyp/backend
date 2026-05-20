const userModel = require("../models/usermodel")
const geet = () => {
    try {
        return userModel.find()
    } catch (error) {
        console.log(error.message)
    }
}
module.exports = geet
