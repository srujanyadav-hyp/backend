const jwt = require("jsonwebtoken");
require("dotenv").config();

const authenticate = (request, response, next) => {

    try {
        const authHeader = request.headers["authorization"];
        if (!authHeader) {
            return response.status(401).json({
                message: "authorization token is required"
            });

        }
        // Bearer TOKEN
        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        request.user = decoded;

        next();

    } catch (error) {
        console.log(error)
        if (error.name === "TokenExpiredError") {

            return response.status(401).json({
                message: "your session expired please login again"
            });

        }
        if (error.name === "JsonWebTokenError") {

            return response.status(401).json({
                message: "invalid token"
            });

        }
        return response.status(500).json({
            message: "internal server error",
            error: error.message
        });

    }

};

module.exports = authenticate;