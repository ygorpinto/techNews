import { useEffect, useState } from "react";
import { Container } from "./components/Container/Container.jsx";
import { Header } from "./components/Header/Header.jsx";
import Loader from "./components/Loader/Loader.jsx";
import GlobalStyles from "./styles/global.js";


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
          <GlobalStyles />
            <Container>
              <Header />
            </Container>
        </>
      )}
    </>

  );
}

export default App;
