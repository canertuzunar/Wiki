import React from 'react'
import styles from'./Footer.module.scss'

const Footer = () => {
    return (
        <footer id={styles.footer}>
            <ul className={styles.footerList}>
                <li>choose language</li>
                <li>social media</li>
                <li>feedback</li>
            </ul>
        </footer>
    )
}


export default Footer