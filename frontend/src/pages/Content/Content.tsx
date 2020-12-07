import React from 'react'
import style from './Content.module.scss'
import { Layout } from '../../components'
import doom from '../../image/doom.jpg'
import { useParams } from 'react-router-dom'
import game from '../../graphql/query/game.graphql.js'
import { Query } from 'react-apollo'
import Infos from 'src/components/Infos/Infos'
import ReactMarkdown from 'react-markdown'
interface GameInterface {
  game: any
}
interface GameInterfaceVars {
  name: string
}
const Content = () => {
  const { id } = useParams<{ id: string }>()
  console.log(id)
  return (
    <Layout>
      <Query<GameInterface, GameInterfaceVars> query={game} variables={{name:id}}>
        {({loading, error, data}) => {
          console.log(loading, error, data, id)
          return loading ? (<div>loading</div>) :(
            <div className={style.wrapper}>
              <div className={style.detailSide}>
                <img src={doom} alt="" />
                {<Infos game={data?.game} />}
              </div>
              <div className={style.contentSide}>
                {<ReactMarkdown source={data?.game.content}/>}
              </div>
            </div>
          )
        }}
      </Query>
    </Layout>
  )
}

export default Content
