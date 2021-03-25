import Menu from "../Menu/Menu"
import HeaderStyles from "./HeaderStyles"

export const Header = () => {
    return (
        <HeaderStyles>
            <Menu/>
            <h1>FinTech News</h1>
        </HeaderStyles>
    )
}