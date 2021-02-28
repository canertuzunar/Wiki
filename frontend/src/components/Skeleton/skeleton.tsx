import React, { FC } from 'react'
import styled from 'styled-components'

interface ISkeleton {
    width?: string;
    height?: string;
    row?: number;
    widthRandom?: number;
    heightRadom?: number;
    backgroundColor?: string;
}

const Skeleton: FC<ISkeleton> = ({width, height, row, widthRandom, heightRadom, backgroundColor}) => {
    const widthType = width!.toString().replace(/\d+/g, '')
    const heightType = height!.toString().replace(/\d+/g, '')
    const w = parseFloat(width!);
    const h = parseFloat(height!);
    const SkeletonElements = []
    for(let i = 0; i < row!; i++){
        const randomWidth = `${w - (Math.random() * w * widthRandom!)}${widthType}`;
        const randomHeight = `${h - (Math.random() * h * heightRadom!)}${heightType}`;
        SkeletonElements.push(
            <StyledSkeleton key={`skeleton-${i}`} style={{width:randomWidth, height:randomHeight, backgroundColor}}>
            </StyledSkeleton>
        )
    }

    return (
        <>
            {SkeletonElements}
        </>
    )
}


Skeleton.defaultProps = {
    row: 1,
    width: '150px',
    height: '100%',
    widthRandom: 0.25,
    heightRadom: 0.25,

}


const StyledSkeleton = styled.span`
  display: flex;
  flex-flow: row wrap;
  line-height: 1;
  overflow: hidden;
  position: relative;
  background-color: #E2E2E2;
  border-radius: 8px;
  margin: 5px 0;
  &::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 500px;
    top: 0;
    left: -500px;
    background-image: linear-gradient(90deg, rgba(255,255,255, 0), rgba(255,255,255, 0.6), rgba(255,255,255, 0));
    animation: loading 1.2s ease-in-out infinite
  }

  @keyframes loading {
      100% {
          left: 100%
      }
  }
`


export default Skeleton