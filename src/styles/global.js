import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #1e192c;
    color: #ffffff;
    font-family: "Open Sans", sans-serif;
  }
`;