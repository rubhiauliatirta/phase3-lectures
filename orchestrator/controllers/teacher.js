const axios = require("axios")

class TeacherController {
  static find(req, res, next){
    axios({
      url : "http://localhost:3002/teachers",
      method : "get"
    })
    .then(({data}) => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static create(req, res, next){
    axios({
      url : "http://localhost:3002/teachers",
      method : "post",
      data : req.body
    })
    .then(({data}) => {
      res.status(201).json(data)
    })
    .catch(err => {
      res.send(err)
    })
  }
}

module.exports = TeacherController