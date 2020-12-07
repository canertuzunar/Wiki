import gql from 'graphql-tag'

export default gql`
  query Games($name: String!) {
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
`
