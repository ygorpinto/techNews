import styled from 'styled-components'

const HeaderStyles = styled.div`
height:20vh;
width:100%;

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

h1 {
    border-right:2px solid rgba(0,0,0,0.0);
    margin:0;
    font-family: 'Montserrat', sans-serif;
    font-weight:300;
    font-size:3.6rem;
    text-shadow:1px 1px #ce1e9c;
    white-space:nowrap;
    overflow:hidden;
    animation: 
        blinkCursor 400ms steps(30) 1s infinite normal,
        typing 3s steps(30) 1s normal both,
        hideborder 3s 4.3s infinite normal;

    @keyframes blinkCursor {
            from {
                border-right-color:rgba(0,0,0,0.5);
            }
        
            to {
                border-right-color:transparent;
            }
        }

    @keyframes typing {
            from {
                width:0;
            }
            
            to {
                width:26rem;
            }
        }

    @keyframes hideborder {
        from {
            border-right-color:transparent;
        }

        to {
            border-right-color:transparent;
        }
    }
}
`

export default HeaderStyles;