const shows = require('./dataSource')
module.exports = {
  Query: {
    shows: () => shows
  }
}
