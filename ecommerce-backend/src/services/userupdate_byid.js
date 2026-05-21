const userdb = require("../models/usermodel")
const updateduserwithid = async (id, name, email, password) => {
    const result = await userdb.findByIdAndUpdate(id, { name, email, password }, { returnDocument: "after" })
    if (!result) {
        return "no updated the user"

    } else {
        return `user updated successfully with his ${id}`
    }
}
module.exports = updateduserwithid


