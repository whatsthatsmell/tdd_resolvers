const got = require('got')

const url = 'https://statsapi.mlb.com/api/v1/teams/119/roster'

module.exports = async () => {
  const { body: { roster } } = await got(url, { responseType: 'json' })
  return roster
}
