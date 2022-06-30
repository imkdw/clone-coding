import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    height: 100vh;
    overflow: hidden;
  }

  #root {
    width: 100%;
    height: 100%;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  input {
    outline: none;

    &::placeholder {
      opacity: .6;
      font-size: 18px;
    }
  }

`;

export default GlobalStyle;
