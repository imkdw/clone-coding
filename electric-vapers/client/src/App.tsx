import Container from "./components/common/Container";
import Main from "./components/main/Main";
import GlobalStyle from "./GlobalStyles";
import { useRecoilState } from "recoil";
import { showSideMenuState } from "./recoil/recoil";
import SideMenu from "./components/header/SideMenu";

const App = () => {
  const [showSideMenu, setShowSideMenu] = useRecoilState(showSideMenuState);
  return (
    <>
      <Container>
        {showSideMenu && <SideMenu />}
        <Main />
      </Container>
      <GlobalStyle />
    </>
  );
};

export default App;
