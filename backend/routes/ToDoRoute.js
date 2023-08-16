const {Router} = require('express');
const { getTodo, saveTodo, deleteToDo, updateToDo,} = require('../controllers/ToDoController');
const {registerUser, loginUser} = require('../controllers/UserDataController')



const router = Router()

router.get("/",getTodo)

router.post("/save", saveTodo)

router.post("/update", updateToDo)

router.post("/delete",deleteToDo)

router.post("/register",registerUser)

router.post("/login",loginUser)

module.exports = router;