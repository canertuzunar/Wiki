import gql from 'graphql-tag'

export const EngineQueries = {
    engines: gql`
        query Engines {
           engines {
               name
               owner{
                   name
               }
           } 
        }
    `,
    engine: gql`
        query Engine($name: String!) {
            engine {
                name
                games
                owner
                license
            }
        }
    ` 
}