import gql from 'graphql-tag'

export const GameQueries = {
  game : gql`
  query Game($id: ID!) {
    game(id: $id) {
      name
      release
      mainCharacter
      category
      publisher
      developers {
        name
      }
      engine
      series
      directors {
        name
      }
      platforms {
        name
      }
      characters {
        name
      }
      content
    }
  }
`,
games : gql`
  query Games {
    games {
      id
      name
      release
      category
      publisher
      developers {
        name
      }
      platforms {
        name
      }
    }
  }
`,



} 