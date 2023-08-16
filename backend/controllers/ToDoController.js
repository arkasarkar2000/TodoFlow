const ToDoModel = require('../models/ToDoModel')

module.exports.getTodo = async(req,res)=>{
    const todo = await ToDoModel.find()
    res.send(todo)
}

module.exports.saveTodo =async(req,res)=>{
    const {text} = req.body

    ToDoModel.create({text})
    .then((data)=>{
        res.send(data)
    })
}

module.exports.updateToDo = async (req,res)=>{
    const{_id,text} = req.body

    ToDoModel.findByIdAndUpdate(_id,{text})
    .then(()=> res.send("Updated.."))
    .catch(err=>console.log(err))
}

module.exports.deleteToDo = async (req,res)=>{
    const{_id} = req.body

    ToDoModel.findByIdAndDelete(_id)
    .then(()=> res.send("Deleted.."))
    .catch(err=>console.log(err))
}

