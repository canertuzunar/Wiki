import gql from 'graphql-tag'

export const EngineQueries = {
    engines: gql`
        query Engines {
           engines {
               name
               owner
           } 
        }
    `,
    engine: gql`
        query Engine($name: String!) {
            engine(name: $name) {
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