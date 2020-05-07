const express = require("express")
const app = express()
const PORT = process.env.PORT || 3002
const mongo = require("./config/config.js")
const cors = require("cors")

mongo.connect(function(err){
  if (!err) {
    
    app.use(cors())
    app.use(express.json())
    app.use(express.urlencoded({extended: false}))
    app.use("/", require("./routes"))

    app.listen(PORT, function(){
      console.log("server is running on PORT " + PORT)
    })
  }
})





