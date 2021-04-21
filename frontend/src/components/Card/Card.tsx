import React, {FC} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
interface CardInterface {
  name: string
  id: string;
  listType: string;
  info?: string[];
}
const Card: FC<CardInterface> = ({id, info, listType, name}) => {
    return (
      <StyledCard className="card">
            <Link to={`/${listType}/${id}`}>
                <picture className="imgContainer">
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.mordeo.org%2Ffiles%2Fuploads%2F2020%2F01%2FDoom-Eternal-2020-4K-Ultra-HD-Mobile-Wallpaper.jpg&f=1&nofb=1" alt="" className="card-img"/>
                    <div className="platforms">
                        <div>
                            <p>{info}</p>
                        </div>
                    </div>
                </picture>
                <div className="card-info">
                    <h3>{name}</h3>
                </div>
            </Link>
        </StyledCard>
    )
  }
  
const StyledCard = styled.section`
  max-width: 200px;
  min-width: 200px;
  display: inline-block;
  margin: 8px 34px 30px 0;
  width: 18%;
  a {
      text-decoration: none;
      color: black;
  }
  .imgContainer{
    width: 100%;
    display:block;
    position:relative;
    box-sizing:content-box;
    .card-img{
      width: 100%;
      position: static;
      transform: none;
    }
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
  .card-info{
    display: flex;
    flex-flow: row wrap;
    align-items: baseline;
    h3 {
      width: auto;
      margin: 0.5em 0;
    }
  }   
`

export default Card 