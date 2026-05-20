//importing the express package, routes module
const express = require("express")
const routes = require("./routes/routes")
//calling the function to use the express
const app = express();
//this is the middleware which help to convert the user request json into the actual json
app.use(express.json());
//this is the middleware which help to use the router
app.use(routes)

module.exports = app;