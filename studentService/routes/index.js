const router = require("express").Router()
const StudentController = require("../controllers/student")

router.get("/students", StudentController.find)
router.post("/students", StudentController.create)

module.exports = router