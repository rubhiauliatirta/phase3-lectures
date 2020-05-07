const router = require("express").Router()
const TeacherController = require("../controllers/teacher")
const StudentController = require("../controllers/student")

router.get("/teachers", TeacherController.find)
router.post("/teachers", TeacherController.create)
router.get("/students", StudentController.find)
router.post("/students", StudentController.create)

module.exports = router