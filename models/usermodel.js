const mongoose=require("mongoose");

const students  = new mongoose.Schema({
    name:{
        type: String
    },
    rollNo:{
        type: Number
    }
})

module.exports = mongoose.model("student",students);
