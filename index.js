// Apollo is overkill, we could just use graphql-js and graphql-tag
const { ApolloServer } = require('apollo-server')
const { typeDefs, resolvers } = require('./schema')
const server = new ApolloServer({ typeDefs, resolvers })
server.listen().then(({ url }) => {
  console.log('A running server at: ' + url)
})

// curl -s 'http://localhost:4000/' -H 'Content-Type: application/json' -d '{"query": "{ players { name, position } }"}' | jq
