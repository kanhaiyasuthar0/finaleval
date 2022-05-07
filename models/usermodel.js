const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

  firstName: { type: String,minLength:3, maxLength:30, required:true },
  lastName: { type: String, required:false, minLength:3, maxLength:30  },
  age: { type: Number,  required:true, min:1, max:150 },
  email:{type:String, required:true,  unique:true},
  profileImages :[ {type:Array, min:1 }],
    
      
    
  }, {
    timestamps: true,
  }
);


module.exports = mongoose.model("user", userSchema);;
