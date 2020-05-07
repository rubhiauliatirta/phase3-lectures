const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000
const mongo = require("./config/config.js")

mongo.connect(function(err){
  if (!err) {
    app.use(express.json())
    app.use(express.urlencoded({extended: false}))
    app.use("/", require("./routes"))
    /**
     * require("./router") ini penting untuk diletakkan didalam callback mongo.connect ini
     * kerena kalau di require sebelumnya nya, getDatabase akan return undefined sehingga
     * code di bagian models menjadi error
     */

    app.listen(PORT, function(){
      console.log("server is running on PORT " + PORT)
    })
  }
})





