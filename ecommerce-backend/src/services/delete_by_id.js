const userModel = require('../models/usermodel')
const deleteuser = async (id) => {
    const result = await userModel.findByIdAndDelete(id)
    return result
}
module.exports = deleteuser