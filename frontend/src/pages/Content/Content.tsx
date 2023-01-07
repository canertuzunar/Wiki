import React from 'react'
import { Infos, Layout, LoadingContent } from '../../components'
import doom from '../../image/doom.jpg'
import { useParams } from 'react-router-dom'
import { Query } from 'react-apollo'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import querySelector from 'src/util/querySelector'
import { ErrorPage } from '..'
import styled from 'styled-components'

interface GameInterface {
  [key: string]: any
}
interface GameInterfaceVars {
  id: string
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
      <Query<GameInterface, GameInterfaceVars> query={selectedQuery} variables={{id:id}}>
        {({loading, error, data}) => {
          return error ? <ErrorPage /> : loading ? (<LoadingContent/>) : (
            <StyledContent>
              <div className="detailSide">
                <img src={doom} alt="" />
                <Infos data={data![listType]} />
              </div>
              <div className="contentSide">
                <ReactMarkdown plugins={[remarkGfm, remarkParse]}  children={data![listType].content}/>
              </div>
            </StyledContent>
          )
        }}
      </Query>
    </Layout>
  )
}

const StyledContent = styled.div`
  display: flex;
  flex-basis: 100%;
  flex-direction: row;
  margin: 0 40px;
  gap: 2em;

  .detailSide {
    display: flex;
    flex-flow: row wrap;
    flex-basis: 29%;
    justify-content: center;
    background-color: #e5e5e5;
    gap: 2em;
    img {
      margin-top: 30px;
      width: 75%;
      height: 750px;
      object-fit: cover;
      object-position: center;
    }
  }

  .contentSide {
    flex-basis: 69%;
    background-color: $white;
  }

  .details {
    display: flex;
    flex-flow: column wrap;
    flex-basis: 70%;
    margin: 30px 0;
  }
  @media (max-width: 1024px) {
    .wrapper {
      display: block;
    }
  }
`

export default Content
