const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    userid  :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    commentid  : [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'comment'
        }
    ],
   
    likes: { type: Number,default:0 },
    coverImage: { type: String, required:true, min:1,max:1  },
    content: { type: String,  required:true },
},
    {
        timestamps: true
    }
);

const book = mongoose.model("book", bookSchema);
module.exports = book;

