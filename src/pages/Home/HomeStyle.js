import styled from 'styled-components'

export const HomeStyle = styled.div`
height:80vh;
width:100%;
display:flex;
justify-content:center;
align-items:center;
font-family: 'Montserrat', sans-serif;
text-shadow:1px 1px #ce1e9c;
animation:showEffect 3.8s normal;

@keyframes showEffect {
        from {
            opacity:0;
        }

        to {
            opacity:1;
        }
    }
`