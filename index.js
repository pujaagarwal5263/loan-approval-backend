const express=require("express");
const { configDotenv } = require('dotenv');
configDotenv();

const conn=require("./db-connection");
require("./models/index")

//uncomment the following to insert data once DB is created
//require("./data-insertion");

const Router=require("./routes/router")
const app=express();
app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(Router);

// you can use this force as true when complete reset for DB is required
// conn.sequelize.sync({ force: true}).then(()=>{
conn.sequelize.sync({ alter: true}).then(()=>{
    console.log("Syncing Complete");
}).catch((err)=>{
   console.log(err);
})

app.listen(process.env.PORT,()=>{
    console.log("Server is running");
})