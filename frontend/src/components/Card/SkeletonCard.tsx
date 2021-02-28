import React from 'react'
import styled from 'styled-components'
import { Skeleton } from '..'

const SkeletonCard = () => {
    return (
      <StyledSkeletonCard>
        <picture className="imgContainer">
          <Skeleton width="200px" height="350px" />
          <div className="platforms">
            <div>
              <p>Loading</p>
            </div>
          </div>
        </picture>
        <Skeleton width="190px" height="20px" />
      </StyledSkeletonCard>
    )
  }
  
const StyledSkeletonCard = styled.section`
  max-width: 200px;
  min-width: 200px;
  display: inline-block;
  margin: 8px 34px 30px 0;
  width: 18%;
  .imgContainer{
    width: 100%;
    display:block;
    position:relative;
    box-sizing:content-box;
    .platforms{
      position:absolute;
      left: 0;
      bottom: 0;
      right: 0;
      overflow: hidden;
      div {
        bottom: 0;
        right: 0;
        background-color: #fff;
        display: inline-block;
        transform: translateX(-15px) skewX(32deg);
          p {
            transform: skewX(-32deg);
            height: 32px;
            line-height: 30px;
            padding: 0 16px 0 22px;
            display:inline-block;
            font-size:13px;
          }
      }
    }
  }  
`

export default SkeletonCard 