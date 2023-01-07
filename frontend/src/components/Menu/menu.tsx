import React from 'react'
import { Link } from 'react-router-dom'
import { useStore } from 'src/util/store/store'
import { StyledMenu } from '..'

const Menu = () => {
    const { state } = useStore()
    return (
        <StyledMenu open={state.menuOpen}>
            <h2>gamewiki</h2>
            <Link to="/games">Games</Link>
            <Link to="/engines">Engines</Link>
            <Link to="/developers">Developers</Link>
        </StyledMenu>
    )
}

export default Menu