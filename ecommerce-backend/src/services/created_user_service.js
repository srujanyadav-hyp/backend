const bcrypt = require("bcrypt")
const userModel = require("../models/usermodel")

const createUser = async (name, email, password) => {
    const hashedPassword = await bcrypt.hash(password, 10)
    return userModel.create({
        name,
        email,
        password: hashedPassword
    })
}

module.exports = createUser