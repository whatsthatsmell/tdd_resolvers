const ds = require('./dataSource')
module.exports = {
  // no resolver map because we always returning all & no nested objs
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
