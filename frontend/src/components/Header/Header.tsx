import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '..'
import styles from'./Header.module.scss'
const Header = () => {
    return (
        <header className={styles.header}>
            <p>Button</p>
            <Logo/>
            <p>sign in</p>
        </header>
    )
}


export default Header