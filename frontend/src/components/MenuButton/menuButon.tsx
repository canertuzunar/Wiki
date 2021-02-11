import styled from 'styled-components'
import React from 'react'
import { useStore } from 'src/util/store/store'

interface MenuWrapperI {
    isToggle: boolean
}

const MenuWrapper =  styled.label<MenuWrapperI>`
    flex-basis:10%;
    align-self: center;
    cursor: pointer;
    z-index: 1013;
    
    .line {
        display: block;
        height: 5px;
        width: 25px;
        position: relative;
        background-color: ${({isToggle}) =>  isToggle ? 'white' : 'black'};
        transition: 0.3s;
        &::after, &::before{
            display: block;
            transition: 0.3s;
            position: absolute;
            content: ' ';
            height: 5px;
            width: 25px;
            margin: 2px 0;
            background-color: ${({isToggle}) =>  isToggle ? 'white' : 'black'};
        }
        &::before {
            margin-top: -8px;
        }
        &::after {
            margin-top: 8px;
        }

    }
`

const MenuButton = () => {
    const { state, dispatch } = useStore()
    return(
        <MenuWrapper isToggle={state.menuOpen} onClick={() => dispatch({type:'setMenu', value: !state.menuOpen})}>
            <span className="line"></span>
        </MenuWrapper>
    )
}

export default MenuButton