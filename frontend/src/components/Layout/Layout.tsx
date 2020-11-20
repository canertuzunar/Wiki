import React, { Fragment } from'react'
import { useStore } from '../../util/store/store'
import {Header, Footer, Head} from'../index'
import styles from'./Layout.module.scss'

interface LayoutProps {
    children: React.ReactNode
}

const Layout : React.FC<LayoutProps> = ({children}) => {
    const { dispatch} = useStore()
    const scrollDetector = (scrollY:number) => {
    scrollY > 30 ? dispatch({type:"setShadow", value:true}) : dispatch({type:"setShadow", value:false})
    }
    return (
        <Fragment>
            <div className={styles.container} onScroll={(e) => {
                e.persist()
                const element = e.target as HTMLBodyElement
                scrollDetector(element.scrollTop)

            }}>
                <Head/>
                <Header />
                {children}
                <Footer/>
            </div>
        </Fragment>
    )
}


export default Layout