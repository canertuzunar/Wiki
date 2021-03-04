import React, { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

interface ILinkButton {
    children?: ReactNode;
    to?: string;
    style?: Object;
}

const LinkButton: FC<ILinkButton> = ({to, children, style}) => {
    return <StyledLinkButton style={style} as={Link} to={ to || "/"}>{children}</StyledLinkButton>
}


const StyledLinkButton = styled.section`
    text-decoration: none;
    width: 192px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    border-radius: 30px;
    background-color: black;
    cursor: pointer;
    color: white;
    text-decoration: none;  
`
LinkButton.defaultProps = {
    children: "Button"
}

export default LinkButton