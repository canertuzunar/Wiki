import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Logo.module.scss'
import cnBind from 'classnames/bind'

const Logo = () => {
  let cx = cnBind.bind(styles)
  return (
    <Link to="/content" className={cx({ logo: true})}>
      <h2>GameWiki</h2>
    </Link>
  )
}

export default Logo
