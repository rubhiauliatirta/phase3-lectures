const Student = require("../models/student")

class StudentController {
  static find(req, res, next){
    Student.find()
    .then(results => {
      res.status(200).json(results)
    })
    .catch(err=> {
      console.log(err)
      res.status(500).json({
        message : "Internal Server Error"
      })
    })
  }
  static create(req, res, next){

    const { name, grade } = req.body
    Student.create({name, grade})
    .then(result => {
      res.status(200).json(result.ops[0])
    })
    .catch(err=> {
      console.log(err)
      res.status(500).json({
        message : "Internal Server Error"
      })
    })
  }
}

module.exports = StudentController