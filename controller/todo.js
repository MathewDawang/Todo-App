let TodoDb = require("../models/TodoDb")



exports.getAllTodos=(req, res)=>{
res.render("index.ejs")
}



exports.createTodo = (req, res)=>{
    console.log(req.body)
    TodoDb.query(`INSERT INTO todos(id, task, updated_by) VALUES('1','${req.body.newtask}', 'manoah')`, (err, data)=>{
        if(err){
            res.json({message:" could not create Todo", error: err})
        }else{
            res.json(data)
        }
    })
    
}






module.exports = exports