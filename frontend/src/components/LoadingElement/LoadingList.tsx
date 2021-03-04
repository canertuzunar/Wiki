import React from 'react'
import styled from 'styled-components'
import { SkeletonCard } from '../index'

const SkeletonContent = () => {
    const elementStack = []
    for(let i = 0; i <= 12; i++) {
        elementStack.push(<SkeletonCard key={i}/>)
    }
    return(
        <StyledContent>
            {elementStack}    
        </StyledContent>
    )
}
//
const StyledContent = styled.div`
    flex-basis: 100%;
    margin: 0 40px;
`

export default SkeletonContent