import React, { Fragment, useState } from'react'
import cnBind from'classnames/bind'
import styles from './Search.module.scss'
import i18next from 'i18next'
import { useHistory } from 'react-router-dom'

const Search = () => {
    let history = useHistory()
    let cx = cnBind.bind(styles)
    const [focus, setFocus] = useState(false)
    const [searchParam, setSearchParam]  = useState('')
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