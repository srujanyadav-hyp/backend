const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require("dotenv").config();
const userModel = require('../models/usermodel')
const login = async (email, password) => {
    const user = await userModel.findOne({ email: email.toLowerCase() })
    if (!user) {
        return {
            status: 404,
            message: "please create your account"
        }
    }
    else {
        const ismatch = await bcrypt.compare(password, user.password)
        if (!ismatch) {
            return {
                status: 403,
                message: "please enter the correct password"
            }
        }
        else {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' })
            return {
                status: 200,
                message: "you are logged in successfully",
                token: token
            }

        }
    }
}

module.exports = login
