import React from 'react'
import { Layout, Search } from '../../components'
import style from './Home.module.scss'
import cnBind from 'classnames/bind'
import xbox from '../../image/xbox.png'
import i18next from 'i18next'
const Home = () => {
  //TODO search results(similar name)
  let cx = cnBind.bind(style) 
  return (
    <Layout>
      <div className={style.mainWrapper}>
        <div className={style.search}>
          <Search/>
          <p
            className={cx(
              style.secondaryText,
              style.bold,
              style.font22,
              style.SearchText
            )}
          >
            {i18next.t('secondaryText')}
          </p>
        </div>
        <div className={cx(style.image)}>
          <img src={xbox} alt="" />
        </div>
      </div>
    </Layout>
  )
}

export default Home
