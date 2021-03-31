import styled from 'styled-components'

export const SobreStyle = styled.div`
height:80vh;
width:80%;
display:flex;
flex-direction:column;
align-items:center;
font-family: 'Montserrat', sans-serif;
animation:showEffect 3.8s normal;

img {
    position:absolute;
    top:27%;
    left:19%;
    height:20%;
    border-radius:50%;
    opacity:0.9;  

    :hover {
        opacity:1;
        animation:expandEffect 0.2s normal infinite;
    }
}
span {
    display:flex;
    flex-direction:column;
    align-items:center;
    margin:0.5rem 0 0 0;

    h1 {
        margin:5.5rem 0 0 4rem;
        font-size:1.3rem;
        font-weight:300;
        text-align:right;
    }

    p{
        margin:5.5rem 0 0 0;
    }
}
strong {
    font-size:1.6rem;
    font-weight:600;
    text-shadow:1px 1px #ce1e9c;
}

p {
    margin:2rem 0 0 0;
    font-size:1rem;
    font-weight:300;
}
@keyframes showEffect {
        from {
            opacity:1;
        }

        to {
            opacity:1;
        }
    }
@keyframes expandEffect {
        from {
            height:24%;
        }

        to {
            height:24%;
        }
    }
`