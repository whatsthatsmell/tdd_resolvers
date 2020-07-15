const gql = require('graphql-tag')

module.exports = gql`
type TVShow {
  name: String
  genre: String
}

type Query {
  shows: [TVShow]
}
`
