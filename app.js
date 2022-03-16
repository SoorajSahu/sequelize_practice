const express = require("express");
const app = express();
const UserController = require('./app/UserController')
const port = 3000;
const db = require('./dbconn');
app.use(express.json());
app.use("/user", UserController)


app.use( async()=>{
   
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
