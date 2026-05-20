require("dotenv").config()
const mongoose = require("mongoose")
const MONGODB_URL = process.env.MONGODB_URL
const mongodbConnection = async () => {
    try {
        await mongoose.connect(MONGODB_URL)
        console.log("mongodb connected successfully")
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}

module.exports = mongodbConnection