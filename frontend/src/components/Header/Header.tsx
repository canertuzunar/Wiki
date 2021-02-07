import React from 'react'
import { Logo } from '..'
import styles from './Header.module.scss'
import cn from 'classnames'
import cnBind from 'classnames/bind'
import { useStore } from '../../util/store/store'
// TODO add sign in button 
const Header = () => {
  const { state } = useStore()
  let cx = cnBind.bind(styles)
  return (
    <header className={cx({ headerAttr: state.headerAttr })}>
      <div className={cx({ headerWrapper: true })}>
        <label className={cn(styles.menuButton)}>
          <span className={cn(styles.line)}></span>
        </label>
        <Logo />
      </div>
    </header>
  )
}

export default Header
