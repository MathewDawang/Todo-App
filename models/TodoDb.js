let mysql = require("mysql")
let dbconnect = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"password",
    database:"TodoApp"

})
dbconnect.connect(()=>{
console.log("database is connected successfully")
})
module.exports = dbconnect