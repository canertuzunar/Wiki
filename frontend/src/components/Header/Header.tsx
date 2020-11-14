import React from 'react'
import { LinkedText, Logo } from '..'
import styles from'./Header.module.scss'
import cn from'classnames'
import cnBind from'classnames/bind'
import { useStore } from '../../util/store/store'
const Header = () => {
    const {state,dispatch} = useStore()
    let cx = cnBind.bind(styles)
    return (
        <header className={cx({headerAttr:state.headerAttr})}>
            <div className={cx({headerWrapper:true})}>
                <p className={cn(styles.menuButton)}>Button</p>
                <Logo/>
            </div>
        </header>
    )
}


export default Header