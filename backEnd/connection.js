// 

const mongoose = require("mongoose");
require("./datamodel");
mongoose.connect('mongodb+srv://buptai05:tathagata05@cluster0-jgg62.mongodb.net/studentdb?retryWrites=true&w=majority',{useFindAndModify:false, useUnifiedTopology: true,useNewUrlParser:true},
 (err)=> {if(!err)
              {console.log("successfully created connection with database") }

              else
                {console.log("error in connection:"+ err)}

          }
          );