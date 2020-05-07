const router = require("express").Router()
const TeacherController = require("../controllers/teacher")

router.get("/teachers", TeacherController.find)
router.post("/teachers", TeacherController.create)

module.exports = router