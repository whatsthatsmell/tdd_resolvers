const players = require('./dataSource')
module.exports = {
  Query: {
    players: () => players
  }
}
