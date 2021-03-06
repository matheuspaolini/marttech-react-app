import { createGlobalStyle } from 'styled-components';

const StylesProvider = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    font-family: 'Roboto Condensed', sans-serif;

    box-sizing: border-box;

    transition: 0.15s ease;
  }

  html, body, #root {
    height: 100%;
  }
  
  body {
    position: relative;
  }

  button {
    cursor: pointer;

    background: transparent;

    border: none;
  }

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  li {
    list-style: none;
  }

  :root {

  }
`;

export default StylesProvider;
