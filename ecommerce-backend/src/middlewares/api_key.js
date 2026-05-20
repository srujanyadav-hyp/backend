require("dotenv").config();

const API_KEY = process.env.X_API_KEY;

const apiKeyMiddleware = (request, response, next) => {

    const apiKey = request.headers["x-api-key"];

    if (apiKey === API_KEY) {

        next();

    } else {

        response.status(401).json({
            message: "Invalid API Key"
        });

    }
};

module.exports = apiKeyMiddleware;