import gql from 'graphql-tag'

export const DeveloperQueries = {
  developer : gql`
  query Developer($id: ID!) {
    developer(id: $id) {
        name
        since
        games {
          name
        }
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
        id
        name
        since
        image{
            url
        }
    }
  }
`,



} 