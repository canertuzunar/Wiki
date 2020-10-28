import React from'react'
import { Link } from'react-router-dom'
import style from'./Link.module.scss'
interface LinkProps{
    name: string,
    link: string
}
const LinkedText: React.FC<LinkProps> = ({name, link}) => {
    return (
        <Link to={link} className={style.link}>
            <p>{name}</p>
        </Link>
    )
}

export default LinkedText