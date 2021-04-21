import React from 'react'
import { Query } from 'react-apollo'
import { useParams } from 'react-router-dom'
import { Card, Layout, LoadingList } from 'src/components'
import querySelector from 'src/util/querySelector'
import styled from 'styled-components'
import { ErrorPage } from '..'

interface ListInterface {
    listType:  string;
}

interface ListInterfaceVars {
    listUrl: string;
}

interface ParamInterface {
    listType : string;
}


const List = () => {
    const { listType } = useParams<ParamInterface>()
    const selectedQuery = querySelector(listType)
    const singleQuery = listType.replace('s', '')
    return (
        <Layout>
            <Query<ListInterface, ListInterfaceVars> query={selectedQuery}>
                {
                    ({loading, error, data}) => {
                        data?.[listType].map(({name, id, category, owner, since}:any) => {
                            console.log(name, id, category, owner, since)
                        })
                        return error ? <ErrorPage /> : loading ? (<LoadingList />) : (
                            <StyledList>
                                {data?.[listType].map(({name, id, category, owner, since}:any, index:number) => {
                                    return <Card key={index} id={id} listType={singleQuery} name={name} info={category || since || owner}/>
                                })}
                            </StyledList>
                        )
                    }
                }
            </Query>
        </Layout>
    )
}

const StyledList = styled.div`
    flex-basis: 100%;
    margin: 0 40px;
`

export default List