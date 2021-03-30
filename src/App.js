import { useEffect, useState } from "react";
import { Container } from "./components/Container/Container.jsx";
import { Header } from "./components/Header/Header.jsx";
import Loader from "./components/Loader/Loader.jsx";
import GlobalStyles from "./styles/global.js";
import {BrowserRouter as Router} from "react-router-dom";
import MainRoutes from "./routes.js";



function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false)
    },1200)
  },[])

  return (
    <>
      {isLoading ? <Loader /> : (
        <>
          <Router>
          <GlobalStyles />
            <Container>
              <Header />
              <MainRoutes/>
            </Container>
          </Router>
        </>
      )}
    </>

  );
}

export default App;
