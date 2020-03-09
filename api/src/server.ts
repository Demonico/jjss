// package imports
import { GraphQLServer } from 'graphql-yoga'
import mongoose from 'mongoose'

// config
global.__basedir = __dirname

mongoose.connect('mongodb://localhost:27017/jjss', { useNewUrlParser: true })

// 1
const typeDefs = `
type Query {
  info: String!
}
`

// 2
const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
  },
}

// 3
const server = new GraphQLServer({
  typeDefs,
  resolvers,
})

server.start(() => console.log(`Server is running on http://localhost:4000`))
