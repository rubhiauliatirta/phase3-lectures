const axios = require("axios")
const Redis = require("ioredis")
const redis = new Redis()

class StudentController {
  static async find(req, res, next){


    //kalau gak pake cache
    // const { data } = await axios({
    //   url : "http://localhost:3001/students",
    //   method : "get"
    // })
    // res.status(200).json(data)


    //kita pake cache
    try {
      const students =  JSON.parse(await redis.get("students"))
      if(students){ //kalau students ada di cache
       res.status(200).json(students)
      }
      else { //kalau gak ada
       //ngambil ke service
       const { data } = await axios({
         url : "http://localhost:3001/students",
         method : "get"
       })
       res.status(200).json(data)
  
       //daftarkan data ke cache
       redis.set("students", JSON.stringify(data))
      }
    } catch (error) {
      res.send(error)
    }

  }

  static async create(req, res, next){
    //request ke service Student

    try {
      const {data} = await axios({
        url : "http://localhost:3001/students",
        method : "post",
        data : req.body
      })
      res.status(200).json(data)

      const students =  JSON.parse(await redis.get("students"))
      
      if(students){
        students.push(data)
        redis.set("students", JSON.stringify(students))
      }
      
    } catch (error) {
      res.send(error)
    }
    
 
    
  }
}

module.exports = StudentController