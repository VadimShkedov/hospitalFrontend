import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Roboto";
    src: url("fonts/Roboto-Light.ttf");
  }

  body {
    margin: 0;
    background-color: #C5E9FF;
    font-family: 'Roboto';
  }

  h1 {
    font-weight: 300;
    font-size: 36px;
  }

  a {
    text-decoration: none;
    color: #000000;
  }
`

export default GlobalStyle;