import React from 'react'
import { LinkedText, Logo } from '..'
import styles from'./Header.module.scss'
const Header = () => {
    return (
        <header>
            <div className={styles.header}>
                <p className={styles.menuButton}>Button</p>
                <Logo/>
                <div className={styles.sign}>
                    <LinkedText name="sign in" link="/"/>
                </div>
                </div>
        </header>
    )
}


export default Header