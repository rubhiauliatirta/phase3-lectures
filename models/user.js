const { getDatabase } = require("../config/config.js")
const User = getDatabase().collection("users")
const { ObjectId } = require("mongodb")

class UserModel {
  static find(){
    return User.find().toArray()
  }

  static findById(id){
    return User.findOne({_id: ObjectId(id)})
  }
  static create(newUser){
    return User.insertOne(newUser)
  }
  static findByIdAndUpdate(id, updatedData){
    return User.updateOne({_id: ObjectId(id)}, {
      $set : updatedData
    })
  }
  static findByIdAndDelete(id){
    return User.deleteOne({_id: ObjectId(id)})

  }
}

module.exports  = UserModel