let TodoDb = require("../models/TodoDb")



exports.getAllTodos=(req, res)=>{
    TodoDb.query(`SELECT * FROM todos `,(err, data)=>{
        if(err){
            res.json({message:"could not display all Todos",error:err})
        }else{
            // res.json(data)
            res.render("index.ejs",{todos:data})
        }
    })
// res.render("index.ejs")
}



exports.createTodo = (req, res)=>{
    console.log(req.body)
    TodoDb.query(`INSERT INTO todos(id, task, updated_by) VALUES(0,'${req.body.newtask}', 'Mathew')`, (err, data)=>{
        if(err){
            res.json({message:" could not create Todo", error: err})
        }else{
            res.json(data)
        }
    })
    
}

exports.getOneTodo = (req, res)=>{
    TodoDb.query(`SELECT task FROM todos WHERE id = 2`, (err, data)=>{
        if(err){
            res.json({message:"could not get that todo"})
        }else{
            res.render("ejs",{todos:data})
        }
    });
}

exports.updateTodo = (req, res)=>{
    TodoDb.query(`UPDATE todos SET task = "Samson" WHERE id = "3"`, (err, data)=>{
        if(err){
            res.json({message:"Could not update that todo"})
        }else{
            res.render("ejs",{todos:data})
        }
    });
};

exports.deleteTodo = (req, res)=>{
    TodoDb.query(`DELETE  FROM todos WHERE id = "4"`, (err, data)=>{
        if(err){
            res.json({message: "Unable to delete that todo"})
        }else{
            res.json("ejs",{todos:data})
        }
    });
}
module.exports = exports