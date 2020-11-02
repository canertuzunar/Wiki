import React from'react'
import { Layout } from '../../components'
import style from './Home.module.scss'
import cn from'classnames'
import xbox from '../../image/xbox.png'
const Home = () => {
    return (
        <Layout>
            <div className={style.container}>
                <div className={style.search}>
                    <input type="text" name="" className={cn(style.searchBar, style.bold)} placeholder="Search GameWiki"/>
                    <p className={cn(style.secondaryText, style.bold, style.font24, style.SearchText)}>
                        Type what you are looking for...
                    </p>
                </div>
                <div className={style.image}>
                    <img src={xbox} alt=""/>
                </div>
            </div>
        </Layout>
    )
}

export default Home