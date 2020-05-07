const { getDatabase } = require("../config/config.js")
const Teacher = getDatabase().collection("teachers")

class TeacherModel {
  static find(){
    return Teacher.find().toArray()
  }
  static create(newTeacher){
    return Teacher.insertOne(newTeacher)
  }
}

module.exports  = TeacherModel