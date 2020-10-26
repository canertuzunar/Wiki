import React from'react'
import { Link } from 'react-router-dom'
import style from'./Logo.module.scss'
const Logo = () => {
    return (
        <Link to="/" className={style.logo}>
            <h2>GameWiki</h2>
        </Link>
    )
}

export default Logo