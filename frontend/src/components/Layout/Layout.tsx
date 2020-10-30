import React, { Fragment } from'react'
import {Header, Footer, Head} from'../index'

interface LayoutProps {
    children: React.ReactNode
}

const Layout : React.FC<LayoutProps> = ({children}) => {
    return (
        <Fragment>
            <Head/>
            <Header/>
                {children}
            <Footer/>
        </Fragment>
    )
}


export default Layout