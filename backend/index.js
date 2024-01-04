const express = require("express");
const cors = require('cors');
const app = express();
require('dotenv').config();
const { createTodo, updateTodo } = require("./types");
const {todo} = require("./db");

app.use(express.json())
app.use(cors())
app.get("/todo/:id",async function(req,res){
    const reqTodo = await todo.findById(req.params.id);
    if(!reqTodo){
        res.status(404).json({ msg : "Todo  not Found"})
    }
    res.json({
        todo : reqTodo
    })
})

app.post("/todo",async function(req,res){
    const isValidTodo = createTodo.parse(req.body)
    if(!isValidTodo){
        res.status(411).json({
            msg : "You sent the wrong inputs",
        })
    }
    await todo.create({
        title : req.body.title,
        description : req.body.description,
        completed : false
    })
    res.json({
        msg : "Todo entered"
    })
})

app.put("/completed/:id",async function(req,res){
    
    await todo.updateOne({
        _id:req.params.id,
    },{
        completed:true,
    })
    res.json({
        msg : "updated todo",  
    })
})

app.get("/todo", async function(req,res){
    const todos = await todo.find({})
    res.json({
        todos
    })
})
app.delete("/todo/:id",async function(req,res){
    const reqTodo = await todo.findById(req.params.id);
    if(!reqTodo){
        res.status(404).json({ msg : "Todo  not Found"})
    }
    const deleted = await todo.findByIdAndDelete(req.params.id)
    if(!deleted){
        res.status(500).json({
            msg : "Error deleting todo"
        })
    }
    res.json({
        msg : "Successfully deleted todo"
    })
})
app.listen(8800)