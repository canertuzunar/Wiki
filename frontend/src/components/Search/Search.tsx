import React, { Fragment, useState } from'react'
import cnBind from'classnames/bind'
import styles from './Search.module.scss'
import i18next from 'i18next'
import { useQuery } from 'react-apollo'
import gameGraphql from 'src/graphql/query/game.graphql'
import { useHistory } from 'react-router-dom'
interface GameInterface {
  game: any
}
interface GameInterfaceVars {
  name: string
}
const Search = () => {
    let history = useHistory()
    let cx = cnBind.bind(styles)
    const [focus, setFocus] = useState(false)
    const [searchParam, setSearchParam]  = useState('')
    const {loading, error, data } = useQuery<GameInterface, GameInterfaceVars>(gameGraphql, {variables:{name: searchParam}})
    console.log(loading, error, data)
    const handleSearch = ( searchParam: string ) => {
        history.push(`content/${searchParam.trim()}`)
    }
    return(
        <Fragment>
        <div className={cx({blur:focus})} />
          <input
            type="text"
            className={cx(styles.searchBar, styles.bold, styles.font36)}
            placeholder={i18next.t('SearchInput')}
            value={searchParam}
            onChange= {e => {
                setSearchParam(String(e.target.value))
            }}
            onKeyDown = {e => {
                if(e.key === "Enter"){
                    handleSearch(searchParam)
                    console.log(e.key)
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
          
        </Fragment>
    )
}

export default Search