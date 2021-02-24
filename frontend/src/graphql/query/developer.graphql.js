import gql from 'graphql-tag'

export const DeveloperQueries = {
  developer : gql`
  query Developer($name: String!) {
    developer(name: $name) {
        name
        since
        games
        socialLinks{
            name
            url
        }
        content
    }
  }
`,
developers : gql`
  query Developers {
    developers {
        name
        since
    }
  }
`,



} 