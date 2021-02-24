import React from 'react'
import style from './Content.module.scss'
import { Infos, Layout } from '../../components'
import doom from '../../image/doom.jpg'
import { useParams } from 'react-router-dom'
import { Query } from 'react-apollo'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import querySelector from 'src/util/querySelector'

interface GameInterface {
  [key: string]: any
}
interface GameInterfaceVars {
  name: string
}
interface IRouter {
  id: string,
  listType: string
}
const Content = () => {
  const { id, listType } = useParams<IRouter>()
  const selectedQuery = querySelector(listType)
  return (
    <Layout>
      <Query<GameInterface, GameInterfaceVars> query={selectedQuery} variables={{name:id}}>
        {({loading, error, data}) => {
          console.log(error, data)
          return loading ? (<div>loading</div>) :(
            <div className={style.wrapper}>
              <div className={style.detailSide}>
                <img src={doom} alt="" />
                {<Infos data={data![listType]} />}
              </div>
              <div className={style.contentSide}>
                <ReactMarkdown plugins={[remarkGfm, remarkParse]}  children={data![listType].content}/>
              </div>
            </div>
          )
        }}
      </Query>
    </Layout>
  )
}

export default Content
