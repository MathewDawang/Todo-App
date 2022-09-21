let express = require("express"),
TodoRouter =require("./route/todo")
TodoStyles = require("./public/style")
app = express();
app.use("/", TodoRouter)

app.set("view engine", "ejs")
app.use(express.static(__dirname + "/views"))
app.use(express.static(__dirname + "/public"))

app.listen(5000, ()=>{
   console.log("app is listening") 
})