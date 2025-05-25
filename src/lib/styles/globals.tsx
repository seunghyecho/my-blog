import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  html,
  body {
    margin: 0;
    padding: 0;
    min-height: 100%;
    box-sizing: border-box;
    font-size: 14px;
    font-family: 나눔스퀘어, 'NanumSquare', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${({theme})=> theme.bgColor};
    color: ${({theme})=> theme.textColor};
  }

  * {
    box-sizing: inherit;
  }

  h1,
  h2,
  h3,
  h4,
  h5{
    font-weight: 600;
  }

  html {
    height: 100%;
  }

  ul,
  li {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  a:focus {
    outline: none;
    border: none;
  }

  button {
    background: none;
    padding: 0;
    border: none;
    cursor: pointer;
  }

  button:disabled {
    cursor: default;
    fill: #f2f3f4;
  }

  input {
    border: none;
    outline: none;
    box-sizing: border-box;
    background: none;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-transition: background-color 9999s ease-out;
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.03);
    -webkit-box-shadow: 0 0 0px 1000px white inset !important;
  }

  strong{
    font-weight: 600;
  }

  b{
    font-weight: 600;
  }
 

`;
