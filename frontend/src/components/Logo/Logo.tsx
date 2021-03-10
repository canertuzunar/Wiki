import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Logo = () => {

  return (
    <StyledLogo as={Link} to="/" >
      <h2>GameWiki</h2>
    </StyledLogo>
  )
}

const StyledLogo = styled.a`
  text-decoration: none;
  color: black;
`
export default Logo
