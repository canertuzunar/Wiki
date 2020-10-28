import React from 'react'
import { LinkedText } from '..'
import styles from'./Footer.module.scss'

const Footer = () => {
    return (
        <footer id={styles.footer}>
            <LinkedText link="/" name="choose language"/>
            <LinkedText link="/" name="feedback"/>
            <LinkedText link="/" name="social media"/>
        </footer>
    )
}


export default Footer