import gql from 'graphql-tag'

export const EngineQueries = {
    engines: gql`
        query Engines {
           engines {
               id
               name
               owner
               image{
                   url
               }
           } 
        }
    `,
    engine: gql`
        query Engine($id: ID!) {
            engine(id: $id) {
                name
                games {
                    name
                }
                owner
                license
                content
            }
        }
    ` 
}