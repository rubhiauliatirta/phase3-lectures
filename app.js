const { ApolloServer, gql, makeExecutableSchema } = require("apollo-server")
const movieSchema = require("./schema/movieSchema")
const userSchema = require("./schema/userSchema")
const axios = require("axios")


const typeDefs = gql`
  type Query
  type Mutation
`

const schema = makeExecutableSchema({
  typeDefs : [
    typeDefs,
    movieSchema.typeDefs,
    userSchema.typeDefs
  ],
  resolvers : [
    movieSchema.resolvers,
    userSchema.resolvers
  ]
})

const server = new ApolloServer({
  schema
})

server.listen().then(({ url }) => {
  console.log(` Server ready at ${url}`);
});
