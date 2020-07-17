const { gql } = require("apollo-server")
const axios = require("axios")

const typeDefs = gql`
type Movie {
  id : ID
  title: String
  release_date: String
}

extend type Query {
  movies : [Movie]
}
`

const resolvers = {
  Query: {
    movies: () => {
      return axios.get("http://localhost:3002/movies")
        .then(({ data }) => {
          return data
        })
    }
  },

}

module.exports = {
  typeDefs,
  resolvers
}