import styled from 'styled-components'

const MenuStyles = styled.div`

display:flex;
justify-content:space-evenly;
align-items:center;

height:10vh;
width:100%;


div{
    margin:6%;
    font-family: 'Montserrat', sans-serif;
    font-weight:300;
    font-size:1.1rem;
    border-radius:4rem;
    animation: showmenu 5s normal;
    transition: opacity 2s;

    a {
        
        text-decoration:none;
    }

    :hover {
        text-shadow: 1px 1px #ce1e9c;
        cursor: pointer;
    }

    @keyframes showmenu {
        from {
            opacity:0;
        }

        to {
            opacity:1;
        }
    }

}
`

export default MenuStyles;
