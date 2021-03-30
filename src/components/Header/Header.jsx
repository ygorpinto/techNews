import Menu from "../Menu/Menu"
import HeaderStyles from "./HeaderStyles"

export const Header = () => {
    return (
        <HeaderStyles>
            <Menu/>
            <h1>Tech News</h1>
        </HeaderStyles>
    )
}