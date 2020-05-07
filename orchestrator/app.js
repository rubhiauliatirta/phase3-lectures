const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000
const cors = require("cors")
const routes = require("./routes")


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use("/", routes)


app.listen(PORT, function () {
  console.log("server is running on PORT " + PORT)
})