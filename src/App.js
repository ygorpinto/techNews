import { Container } from "./components/Container/Container.jsx";
import { Header } from "./components/Header/Header.jsx";
import GlobalStyles from "./styles/global.js";

function App() {
  return (
    <>
    <GlobalStyles/>
    <Container>
    <Header/>
    </Container>
    </>
  );
}

export default App;
