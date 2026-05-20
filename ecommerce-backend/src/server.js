//importing the start of the application
const server = require("./app")
const databaseConnection = require('./config/db')
//this logic help to start the server and listen the request from the user
databaseConnection()
server.listen(5001, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('server started successfully at port 5001 http://localhost:5001')
    }
})