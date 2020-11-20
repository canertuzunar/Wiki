import React from'react'
import { Link } from 'react-router-dom'
import styles from'./Logo.module.scss'
import cnBind from 'classnames/bind'
import { useStore } from '../../util/store/store'

const Logo = () => {
    let cx = cnBind.bind(styles)
    const {state} = useStore()
    return (
        <Link to="/content" className={cx({logo:true, white:state.headerAttr})}>
            <h2>GameWiki</h2>
        </Link>
    )
}

export default Logo