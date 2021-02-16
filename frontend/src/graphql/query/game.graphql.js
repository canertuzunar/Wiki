import gql from 'graphql-tag'

export const GameQueries = {
  game : gql`
  query Game($name: String!) {
    game(name: $name) {
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