import React, { FC } from 'react'
import style from './Infos.module.scss'

interface InfosPropsInterface {
  game: {
    release?: string
    mainCharacter?: string
    category?: string
    publisher?: string
    developers: any[]
    engine?: string
    platforms: any[]
    directors: any[]
    series?: string
    characters: any[]
  }
}

const Infos: FC<InfosPropsInterface> = ({ game }) => {
  return (
    <div className={style.details}>
      <div className={style.detail}>
        <strong>Release Date:</strong>
        <span>{game.release}</span>
      </div>
      <div className={style.detail}>
        <strong>Main Character</strong>
        <span>{game.mainCharacter} </span>
      </div>
      <div className={style.detail}>
        <strong>Category</strong>
        <span>{game.category}</span>
      </div>
      <div className={style.detail}>
        <strong>Publisher</strong>
        <span>{game.publisher}</span>
      </div>
      <div className={style.detail}>
        <strong>Developers</strong>
        <span>
          {game.developers.map((developers: any, index: any) => {
            return <p key={index}>{developers.name}</p>
          })}
        </span>
      </div>
      <div className={style.detail}>
        <strong>Engine</strong>
        <span>{game.engine}</span>
      </div>
      <div className={style.detail}>
        <strong>Platforms</strong>
        <span>
          {game.platforms.map((platforms: any, index: any) => {
            return <span key={index}>{platforms.name}, </span>
          })}
        </span>
      </div>
      <div className={style.detail}>
        <strong>Directors</strong>
        <span>
          {game.directors.map((directors: any, index: any) => {
            return <p key={index}>{directors.name}</p>
          })}
        </span>
      </div>
      <div className={style.detail}>
        <strong>Series</strong>
        <span>{game.series}</span>
      </div>
      <div className={style.detail}>
        <strong>Characters</strong>
        <span>
          {game.characters.map((characters: any, index: any) => {
            return <p key={index}>{characters.name}</p>
          })}
        </span>
      </div>
    </div>
  )
}
Infos.defaultProps = {
  game: {
    category: 'FPS',
    characters: [{ name: 'Archon of Hell' }],
    developers: [{ name: 'id Software' }],
    directors: [{ name: 'John Carmack' }],
    engine: 'Doom Engine',
    mainCharacter: 'Doom Slayer',
    platforms: [{ name: 'It Runs Doom' }],
    publisher: 'Bethesda',
    release: '2017',
    series: 'Doom Series'
  }
}
export default Infos
