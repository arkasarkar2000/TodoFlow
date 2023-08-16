const express = require ('express')
const mongoose = require('mongoose')
require('dotenv').config()

const cors = require('cors')
const app = express()
const routes = require("./routes/ToDoRoute")

const PORT = 8000 || process.env.PORT

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGODB_URL)
.then(()=>console.log("Connected to MongoDB..."))
.catch((error)=>console.error(error))

app.use(routes)

app.listen(PORT,()=>console.log("Listening on port " + PORT))

