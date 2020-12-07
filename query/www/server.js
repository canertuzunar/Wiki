import express from 'express'
const app = express()
import bodyParser from 'body-parser'
const PORT = 4000 | process.env.PORT
import { connect } from '../utils/connect'
import options from '../config/options'
import { graphqlHTTP } from 'express-graphql'
import GameResolver from '../types/game/game.resolver'
import {buildASTSchema} from'graphql'
import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs } from '@graphql-tools/merge'
import {merge} from'lodash'
import DevelopersResolver from '../types/developers/developers.resolver'
import EngineResolver from '../types/engine/engine.resolver'
import cors from'cors'  
const mongoose = require('mongoose')



mongoose.set('useCreateIndex', true)
app.use(cors())

app.use(
  bodyParser.urlencoded({
    extended: false
  })
)
app.use(bodyParser.json())
export const start = async () => {
  await connect(options.URL, { useUnifiedTopology: true })

  const rootSchema = `
        schema {
            query: Query
            mutation: Mutation
        }
    `

  const typesArray = await loadFilesSync(`./***/**/*.graphql`, {extensions: ['graphql']})
  const mergedSchema = mergeTypeDefs(typesArray)
  const schema = buildASTSchema(mergedSchema)
  app.use(
    '/',
    graphqlHTTP({
      schema: schema,
      rootValue: merge({}, DevelopersResolver, GameResolver, EngineResolver),
      graphiql: true
    })
  )

  console.log()
  app.listen(PORT, () => {
    console.log(`Server is Running on ${PORT}`)
  })
}
