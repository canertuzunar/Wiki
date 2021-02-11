import React from 'react'
import { useStore } from 'src/util/store/store'
import { StyledMenu } from '..'

const Menu = () => {
    const { state } = useStore()
    return (
        <StyledMenu open={state.menuOpen}>
            <h2>gamewiki</h2>
            <a href="/">Games</a>
            <a href="/">Developers</a>
            <a href="/">Engine</a>
            <a href="/">Pulishers</a>
        </StyledMenu>
    )
}

export default Menu