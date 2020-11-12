import React from 'react' 
import style from './Content.module.scss'
import { Layout } from '../../components'
import doom from'../../image/doom.jpg'

const Content = () => {
    return(
        <Layout>
            <div className={style.wrapper}>
                <div className={style.detailSide}>
                    <img src={doom} alt=""/>
                    <div className={style.details}>
                        <div className={style.detail}>
                            <strong>Release Date:</strong>
                            <span>27 May 1983</span>
                        </div>
                        <div className={style.detail}>
                            <strong>Main Character</strong>
                            <span>Doom Guy</span>
                        </div>
                        <div className={style.detail}>
                            <strong>Category</strong>
                            <span>Doom Guy</span>
                        </div>
                        <div className={style.detail}>
                            <strong>Publisher</strong>
                            <span>Doom Guy</span>
                        </div>
                        <div className={style.detail}>
                            <strong>Developers</strong>
                            <span>Doom Guy</span>
                        </div>
                        <div className={style.detail}>
                            <strong>Engine</strong>
                            <span>Doom Guy</span>
                        </div>
                        <div className={style.detail}>
                            <strong>Platforms</strong>
                            <span>Doom Guy</span>
                        </div>
                        <div className={style.detail}>
                            <strong>Directors</strong>
                            <span>Doom Guy</span>
                        </div>
                        <div className={style.detail}>
                            <strong>Series</strong>
                            <span>Doom Guy</span>
                        </div>
                        <div className={style.detail}>
                            <strong>Characters</strong>
                            <span>Doom Guy</span>
                        </div>
                    </div>
                    
                </div>
                <div className={style.contentSide}>
                    <h2 className={style.title}>DooM</h2>
                    archive
                </div>
            </div>
        </Layout>
    )
}


export default Content