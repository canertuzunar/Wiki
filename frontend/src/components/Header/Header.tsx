import React from 'react'
import { Logo, Menu, MenuButton } from '..'
import styles from './Header.module.scss'
import cnBind from 'classnames/bind'
import { useStore } from '../../util/store/store'
// TODO add sign in button 
const Header = () => {
  const { state } = useStore()
  let cx = cnBind.bind(styles)
  return (
    <header className={cx({ headerAttr: state.headerAttr })}>
      <div className={cx({ headerWrapper: true })}>
        <MenuButton/>
        <Menu/>
        <Logo />
      </div>
    </header>
  )
}

export default Header
