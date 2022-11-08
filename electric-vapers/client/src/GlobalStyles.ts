/**
 * Set GlobalStyles with reset.css
 * URL : https://meyerweb.com/eric/tools/css/reset/
 */

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }

  body {
    color: #262626;
    overflow-y: scroll;
  }

  a, a:visited {
    color: #262626;
    text-decoration: none;
  }

  img {
    image-rendering: -webkit-optimize-contrast;
    transform: translateZ(0);
    backface-visibility: hidden;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;

export default GlobalStyle;
