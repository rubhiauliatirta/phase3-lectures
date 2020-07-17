const { gql } = require("apollo-server")
const axios = require("axios")

const typeDefs = gql`
  type User {
    id: ID
    name: String
    age: Int
    country: String
  }

  extend type Query {
    users : [User]
    user(userId: ID!) : User
  }

  input newUser {
    name: String
    age: Int
    country: String
  }

  extend type Mutation {
    addUser(user : newUser) : User
  }
`

const resolvers = {
  Query : {
    users : () => {
      return axios.get("http://localhost:3001/users")
      .then(({data}) => {
        return data
      })
    },
    user : (parent, args, context, info) => {
      let userId = args.userId
      return axios.get(`http://localhost:3001/users/${userId}`)
      .then(({ data }) => {
        return data
      })
    },
  },
  Mutation : {
    addUser : (parent, args, context, info) => {
      const {name, age, country} = args.user
      return axios.post(`http://localhost:3001/users/`, { 
        name, age, country
      })
      .then(({ data }) => {
        return data
      })
    }
  }
}
module.exports = {
  typeDefs,
  resolvers
}