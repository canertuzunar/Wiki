import React from 'react'
import style from './Content.module.scss'
import { Layout } from '../../components'
import doom from '../../image/doom.jpg'
import { useParams } from 'react-router-dom'
import {GameQueries} from '../../graphql/query/game.graphql.js'
import { Query } from 'react-apollo'
import Infos from 'src/components/Infos/Infos'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
interface GameInterface {
  game: any
}
interface GameInterfaceVars {
  name: string
}
const Content = () => {
  const { id } = useParams<{ id: string }>()
  const {game} = GameQueries 
  return (
    <Layout>
      <Query<GameInterface, GameInterfaceVars> query={game} variables={{name:id}}>
        {({loading, error, data}) => {
          return loading ? (<div>loading</div>) :(
            <div className={style.wrapper}>
              <div className={style.detailSide}>
                <img src={doom} alt="" />
                {<Infos game={data?.game} />}
              </div>
              <div className={style.contentSide}>
                <ReactMarkdown plugins={[remarkGfm, remarkParse]}  children={data?.game.content}/>
              </div>
            </div>
          )
        }}
      </Query>
    </Layout>
  )
}

export default Content
