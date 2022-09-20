let express = require("express"),
TodoRouter =require("./route/todo")
app = express();
app.use("/", TodoRouter)

app.set("view engine", "ejs")
app.use(express.static(__dirname + "/views"))

app.listen(5000, ()=>{
   console.log("app is listening") 
})