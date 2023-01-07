import React, { Fragment, useState } from'react'
import i18next from 'i18next'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { useQuery } from 'react-apollo'
import { gql } from 'apollo-boost'


interface IBlur {
  focus: boolean;
}


const Search = () => {
    let history = useHistory()
    const [focus, setFocus] = useState(false)
    const [type, setType] = useState('game')
    const [searchParam, setSearchParam]  = useState('')
    const handleSearch = ( searchParam: string ) => {
      if(!loading){
        history.push(`${type}/${data[type.concat('s')][0].id}`)
      }
    }
    const MAIN_QUERY = gql`
      query getGame($name: String!){
          games(where: {name: $name}){
              id
          }
      }
    `
    const {loading, data} = useQuery(MAIN_QUERY, {variables: {name: searchParam}})
    const handleType = (e:any) => {
      setType(e.target.value)
    }
    return(
        <Fragment>
        <StyledSearchBlur focus={focus}/>
          <StyledSearchInput
            type="text"
            placeholder={i18next.t('SearchInput')}
            value={searchParam}
            onChange= {e => {
                setSearchParam(String(e.target.value))
            }}
            onKeyDown = {e => {
                if(e.key === "Enter"){
                    handleSearch(searchParam)
                } 
            }}
            onFocus= {e => {
              setFocus(true)
            }}
            onBlur ={e => {
              setFocus(false)
              setSearchParam('')
            }}
          />
          <StyledSearchType onChange={handleType}>
            <option value="game">Game</option>
            <option value="engine">Engine</option>
            <option value="developer">Developer</option>
          </StyledSearchType>
        </Fragment>
    )
}

const StyledSearchInput = styled.input`
  background-color: white;
  border: 1px solid white;
  border-left: 6px solid black;
  height: 100px;
  font-size: 56px;
  outline: none;
  margin: auto 0;
  padding-left: 25px;
  width: 80%;
  z-index: 1001;

  @media (max-width: 426px) {
    font-size: 32px;
    &::placeholder {
      font-size: 32px;
    }
  }
`

const StyledSearchType = styled.select`
  position: relative;
  border: none;
  height: 30px;
  margin: auto auto;
  z-index: 1001;
  option {
    color: white;
    background-color: black;
  }
  option:hover {
    
  }
`

const StyledSearchBlur = styled.div<IBlur>`
  position: fixed;
  display: ${props => props.focus ? 'block' : 'none'};
  background: rgba(28, 30, 44, 0.9);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  padding: 15px 0;
  min-height: 100vh;
  min-width: 100vw;
  overflow: hidden;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  left: 0;
  top: 0;
`


export default Search