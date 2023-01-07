import React from 'react'
import styled from 'styled-components'
import { Skeleton } from '../index'

const SkeletonContent = () => {
    return(
        <StyledContent>
            <div className="detail">
                <Skeleton width="500px" height="500px" />
                <Skeleton width= "500px" height="20px" row={10} backgroundColor="#000"/>
            </div>
            <div className="content">
                <Skeleton width="100%" height="20px" row={30} />
            </div>
        </StyledContent>
    )
}

const StyledContent = styled.div`
    display: flex;
    flex-basis: 100%;
    flex-direction: row;
    margin: 0 40 px;
    gap: 2em;
    .detail {
        display: flex;
        flex-flow: row wrap;
        padding: 0 40px;
        margin: 30px 0;
        flex-basis: 29%;
        background-color: #e5e5e5;
    }

    .content {
        flex-basis: 69%;
    }
`

export default SkeletonContent