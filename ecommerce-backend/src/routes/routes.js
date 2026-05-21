const express = require("express")
//the express router method help to create routing system
const routes = express.Router()

//==============middleware============//
const loggerMiddleware = require("../middlewares/logger")
const apikeyMiddleware = require("../middlewares/api_key")


//==============controller============//
const getRoot = require("../controllers/root")
const getUserById = require("../controllers/user_id")
const about = require("../controllers/about")
const getProductById = require("../controllers/product_id")
const search = require("../controllers/search")
const createUser = require("../controllers/create_user")
const getUsers = require("../controllers/users")
const updateUser = require("../controllers/upaderuserbyid")


//======================routes ========================//
routes.get('/', getRoot)
routes.get('/users/:id', loggerMiddleware, apikeyMiddleware, getUserById)
routes.post('/create_user', loggerMiddleware, createUser)
routes.get('/users', loggerMiddleware, getUsers)
routes.get('/about', about)
routes.get('/products/:id', getProductById)
routes.get('/search', search)
routes.put('/updateuser/:id', loggerMiddleware, apikeyMiddleware, updateUser)


module.exports = routes;
