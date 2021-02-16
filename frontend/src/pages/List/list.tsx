import React from 'react'
import { Query } from 'react-apollo'
import { useParams } from 'react-router-dom'
import { Card, Layout } from 'src/components'
import querySelector from 'src/util/querySelector'
import styled from 'styled-components'

interface ListInterface {
    listType: Object[];
}

interface ListInterfaceVars {
    listUrl: string;
}

interface ParamInterface {
    listType : string;
}

const List = () => {
    const { listType } = useParams<ParamInterface>()
    const selectedGames = querySelector(listType)
    return (
        <Layout>
        <Query<ListInterface, ListInterfaceVars> query={selectedGames}>
                {
                    ({loading, error, data}) => {
                        console.log(data)
                        return loading ? (<p>loading</p>) : (
                            <StyledList>
                                {data?.[listType].map(({name, category, owner}:any, index:number) => {
                                    return <Card key={index} name={name} category={category || owner.name}/>
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