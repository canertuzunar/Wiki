import React, { Fragment } from'react'
import {Header, Footer} from'../index'

interface LayoutProps {
    children: React.ReactNode
}

const Layout : React.FC<LayoutProps> = ({children}) => {
    return (
        <Fragment>
            <Header/>
            {children}
            <Footer/>
        </Fragment>
    )
}


export default Layout