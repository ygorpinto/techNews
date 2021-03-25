import ContainerStyles from "./ContainerStyles"

export const Container = ({ children }) => {
    return (
        <ContainerStyles>
            {children}
        </ContainerStyles>
    )
}