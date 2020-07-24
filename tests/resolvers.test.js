const ds = require('../schema/dataSource')
const resolvers = require('../schema/resolvers')

describe('Unit Testing GQL Resolvers in Node with TDD', () => {
  test('TDD should be the professional standard', async () => {
    expect(true).toBe(true)
  })
})

describe('persons resolver', () => {
  // this should be a JSON fixture
  const rosterFixture = {
    copyright: 'A lot of stuff from MLB',
    roster: [
      {
        person: {
          id: 608369,
          fullName: 'Corey Seager',
          link: '/api/v1/people/608369'
        },
        jerseyNumber: '5',
        position: {
          code: '6',
          name: 'Shortstop',
          type: 'Infielder',
          abbreviation: 'SS'
        },
        status: {
          code: 'A',
          description: 'Active'
        },
        parentTeamId: 119
      },
      {
        person: {
          id: 642701,
          fullName: 'Dennis Santana',
          link: '/api/v1/people/642701'
        },
        jerseyNumber: '77',
        position: {
          code: '1',
          name: 'Pitcher',
          type: 'Pitcher',
          abbreviation: 'P'
        },
        status: {
          code: 'A',
          description: 'Active'
        },
        parentTeamId: 119
      }
    ]
  }

  test('name should be the full name', async () => {
    const players = resolvers.Query.players()
    expect(players[1].name).toBe('Dennis Santana')
  })

  test('position should be specific', async () => {
    const players = resolvers.Query.players()
    expect(players[0].positions).toBe('Shortstop')
  })
})
