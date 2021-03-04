import React from 'react'
import { LinkButton } from 'src/components'
import styled from 'styled-components'


const ErrorPage = () => {
    return(
        <StyledError>
            <h1>Something Went Wrong.</h1>
            <LinkButton style={{margin:"0 auto"}}>Back to HomePage</LinkButton>
        </StyledError>
    )
}

const StyledError = styled.div`
    h1 {
        font-size: 3.5em;
        text-align: center;
    }
`


export default ErrorPage