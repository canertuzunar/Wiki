import React from 'react'
import styled from 'styled-components'
import Layout from '../Layout/Layout'

const NoMatch = () => {
    return (
        <Layout>
            <StyledNotFound>
                <h1>Not Found</h1>
            </StyledNotFound>
        </Layout>
    )
}

const StyledNotFound = styled.div`
    h1 {
        text-align: center;
    }
`
export default NoMatch