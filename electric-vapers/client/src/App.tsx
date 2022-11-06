import Container from "./components/common/Container";
import Main from "./components/main/Main";
import GlobalStyle from "./GlobalStyles";
import "./App.css";

const App = () => {
  return (
    <>
      <Container>
        <Main />
      </Container>
      <GlobalStyle />
    </>
  );
};

export default App;
