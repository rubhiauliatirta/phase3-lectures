const { getDatabase } = require("../config/config.js")
const Student = getDatabase().collection("students")

class StudentModel {
  static find(){
    return Student.find().toArray()
  }
  static create(newStudent){
    return Student.insertOne(newStudent)
  }
}

module.exports  = StudentModel