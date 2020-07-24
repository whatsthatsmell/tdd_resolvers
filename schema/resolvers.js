const ds = require('./dataSource')

module.exports = {
  Query: {
    async players () {
      const roster = await ds()
      return roster.map(player => {
        return {
          name: player.person.fullName,
          position: player.position.name
        }
      })
    }
  }
}
