import express from'express'
const app = express();
import bodyParser from 'body-parser'
const PORT = 3000 |process.env.PORT
import {connect} from'../utils/connect'
import options from'../config/options'
import {graphqlHTTP} from'express-graphql'
import GameResolver from '../types/game/game.resolver'
import {loadSchema} from'@graphql-tools/load'
import {GraphQLFileLoader} from'@graphql-tools/graphql-file-loader'
import {merge} from 'lodash'
import DevelopersResolver from '../types/developers/developers.resolver';
import EngineResolver from '../types/engine/engine.resolver'

app.use(bodyParser.urlencoded({
   extended: false
}));
app.use(bodyParser.json());
export const start = async () => {
    await connect(options.URL, {useUnifiedTopology: true})

    const rootSchema = `
        schema {
            query: Query
            mutation: Mutation
        }
    `

    const schema = await loadSchema('../***/**/*.graphql', {
        loaders: [
            new GraphQLFileLoader()
        ]
    })
    
    app.use('/', graphqlHTTP({
        schema: schema,
        rootValue: merge({}, DevelopersResolver, GameResolver, EngineResolver),
        graphiql: true
    }))
    app.listen(PORT, () => {
        console.log(`Server is Running on ${PORT}` )
    })
}