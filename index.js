const express = require("express");
const mongoDB = require("./database/db");
const app = express();
const router = require("./routes/routes");

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use("/",router);
mongoDB();

app.listen(process.env.PORT || 3000,() => {
    console.log("Server is up and running at port 3000...");
})