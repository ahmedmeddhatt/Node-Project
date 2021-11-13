const app = require('express').Router()
const {allUsers,addUsers,upUsers,delUsers,login,verifyUser}=require('../controller/user.controller.js')
const validator=require('../../../validator/validator.js')
const {addNewUser,signInJoi}=require('../joi/user.joi.js')
const auth=require("../../../config/auth.js")
const { GET_ALL_USER,DELETE_USER } = require('../../../endPoints.js')

app.get("/allUsers",auth(GET_ALL_USER),allUsers)
app.post("/addUsers",validator(addNewUser),addUsers)
app.put("/upUsers/:id",upUsers)
app.delete("/delUsers/:id",auth(DELETE_USER),delUsers)
app.post("/login",validator(signInJoi),login)
app.get("/verifyUser",verifyUser)
module.exports=app