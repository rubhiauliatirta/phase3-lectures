const { ApolloServer, gql} = require("apollo-server")
const axios = require("axios")

const typeDefs = gql`
type User {
  id: ID
  name: String
  age: Int
  country: String
}
type Student {
  id : ID
  name : String
  grade : Int
}

input InputUser {
  name : String!
  age : Int!
  country : String!
}

type Query {
  users : [User]
  user(userId : ID!) : User
  students : [Student]
}

type Mutation {
  addUser(user: InputUser) : User
}
`

const resolvers = {
  Query : {
    users : () => {

      // cek di redis ada cache atau nggak
      // ada =>  ambil dari cache
      // gak ada => ambil dari service
      return axios({
        url : "http://localhost:3000/users",
        method : "get"
      })
      .then(({data}) => {
        return data
      })
      .catch(console.log)
    },
    students : () => {
      return axios({
        url : "http://localhost:3001/students",
        method : "get"
      })
      .then(({data}) => {
        return data
      })
      .catch(console.log)
    },
    user : (parent, args, context, info) => {
      const { userId } = args
      
      return axios({
        url : `http://localhost:3000/users/${userId}`,
        method : "get"
      })
      .then(({data}) => {
        return data
      })
      .catch(console.log)
    }
  },
  Mutation : {
    addUser : ( _, args) => {
      const { name, age, country } = args.user

      //cek dulu setelah mutate ada cache atu ngga
      // ada => update cache
      // gak ada  => do nothing
      return axios({
        url : `http://localhost:3000/users`,
        method : "post",
        data : {
          name,
          age, 
          country
        }
      }).then(({data}) => {
        return data
      }).catch(console.log)
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});