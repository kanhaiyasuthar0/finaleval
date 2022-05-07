const express = require("express");
const app = express();
const user = require("../models/usermodel")
const Book = require("../models/bookmodel")
const publication = require("../models/publicationmodel")
const comment = require("../models/commentmodel")


app.use(express.json())
app.post("/register", async (req, res, next) => {
    console.log("inside register")
  try {
      let email = req.body.email
      let response1 = await user.findOne({ email })
        if (response1) {
         
           
            res.send(response1 )
        } else {
         
          
    
          let userData = {
              firstName: req.body.firstName,
              lastName: req.body.lastName,
              age: req.body.age,
              email:req.body.email,
              profileImages :[ ...[req.body.profileImages]],
            
            
          }
          let response1 = await user.insertMany([userData]);
    
            res.send(response1)
        }
      
  } catch (error) {
    res.send(error)
  }



});
app.post("/createbook", async (req, res, next) => {
    let book =await Book.insertMany([req.body])
    // userid  :req.body.userid,
    // commentid  : [
    //     {
    //         type:mongoose.Schema.Types.ObjectId,
    //         ref:'comment'
    //     }
    // ],
   
    // likes: { type: Number,default:0 },
    // coverImage: { type: String, required:true, min:1,max:1  },
    // content: { type: String,  required:true },

res.send(book)

});
app.post("/createcomment", (req, res, next) => {
  res.send("Your app is ready");
});
app.post("/login", (req, res, next) => {
  res.send("Your app is ready");
});
module.exports = app;