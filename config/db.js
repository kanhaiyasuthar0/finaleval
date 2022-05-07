const mongoose = require("mongoose");

const connect = ()=>{
    return mongoose.connect("mongodb+srv://kanhaiyasuthar0:kanhaiyasuthar0@cluster0.gn9jg.mongodb.net/finaleval").then(()=>console.log("MongoDb is connected")).catch((err)=>console.log(err))
}
module.exports = connect;