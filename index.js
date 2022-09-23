let express = require("express"),
TodoRouter =require("./route/todo")
// TodoStyles = require("./public/style")
let TodoModels = require("./models/TodoDb"),
bodyParser = require("body-parser"),
app = express();

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.set("view engine", "ejs")
app.use(express.static(__dirname + "/views"))
app.use(express.static(__dirname + "/public"))

app.use("/", TodoRouter)



app.listen(5000, ()=>{
   console.log("app is listening") 
})