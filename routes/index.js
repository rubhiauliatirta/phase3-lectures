const router = require("express").Router()
const UserController = require("../controllers/user")

router.get("/users", UserController.find)
router.get("/users/:id", UserController.findById)
router.post("/users", UserController.create)
router.put("/users/:id", UserController.update)
router.delete("/users/:id", UserController.remove)
module.exports = router