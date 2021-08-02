const mongoose=require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const mongodb_connncetion = () => {
    return mongoose.connect(
    process.env.MONGODB_URL.toString(),
    {useNewUrlParser: true, useUnifiedTopology:true},
    () => console.log("COnnected to mongoDB")
)}

module.exports = mongodb_connncetion;