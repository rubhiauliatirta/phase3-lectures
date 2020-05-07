const Teacher = require("../models/teacher")

class TeacherController {
  static find(req, res, next){
    Teacher.find()
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

    const { name, subject } = req.body
    Teacher.create({name, subject})
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

module.exports = TeacherController