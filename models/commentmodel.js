const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    userid  :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    body: { type: String,  required:true },
},
    {
        timestamps: true
    }
);


module.exports =  mongoose.model("comment", commentSchema);

