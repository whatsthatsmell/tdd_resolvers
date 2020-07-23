const gql = require('graphql-tag')

module.exports = gql`
type Player {
  name: String
  position: String
}

type Query {
  players: [Player]
}
`
