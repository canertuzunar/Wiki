import React from'react'
import { Layout } from '../../components'
import style from './Home.module.scss'
import cn from'classnames'
import xbox from '../../image/xbox.png'
import i18next from 'i18next'
const Home = () => {
    return (
        <Layout>
            <div className={style.mainWrapper}>
                <div className={style.blur}/>
                <div className={style.search}>
                    <input type="text" name="" className={cn(style.searchBar, style.bold, style.font36)} placeholder={i18next.t("SearchInput")}/>
                    <p className={cn(style.secondaryText, style.bold, style.font22, style.SearchText)}>
                        {i18next.t('secondaryText')}
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