import styled from 'styled-components'

interface MenuProps {
    open?: boolean
}

const StyledMenu = styled.nav<MenuProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #000;
    transform: ${ ({open}) => open ? 'translateX(0)' : 'translateX(-100%)'};
    height: 100vh;
    text-align: left;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;
    z-index:1001;

    @media (max-width: 576px) {
        width: 100%;
    }

    a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 1rem;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #FFF;
    text-decoration: none;
    transition: color 0.3s linear;

        @media (max-width: 576px) {
            font-size: 1.5rem;
            padding: 2rem 1rem;
        }

        &:hover {
            color: #343078;
        }
    
    }
    h2 {
        height: 10%;
        color: white;
        font-size: 3rem;
        text-align: center;
        border-bottom: 1px solid white;
        width: calc(100% - 2rem);
        align-self: center
    }
`

export default StyledMenu