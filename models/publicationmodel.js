const mongoose = require("mongoose");

const publication = new mongoose.Schema({
    
    bookid : {
        type:mongoose.Schema.Types.ObjectId,
        ref:'book'
    },
    name: { type: String,  required:true },
},
    {
        timestamps: true
    }
);


module.exports =  mongoose.model("publication", publication);

