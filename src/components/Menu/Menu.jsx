import MenuStyles from "./MenuStyles";
import {Link} from 'react-router-dom'

const Menu = () => {
    return (
        <MenuStyles>
            <div><Link to="/">Home</Link></div>
            <div><Link to="/tech">Tecnologias</Link></div>
            <div><Link to="/articles">Artigos</Link></div>
            <div><Link to="about">Sobre</Link></div>
        </MenuStyles>
    )
}

export default Menu;