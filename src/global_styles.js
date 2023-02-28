import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body,html {
    margin: 0;
    padding: 0;
    background: #101010;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    overflow-x: hidden;
    max-width: 100%;
    scroll-behavior: smooth;
    user-select: none;
    /* height :100vh; */
  }
  .ConatinerNav
  {
    overflow-x: hidden;
    background-color: black;
    width: 244px; 
    overflow: auto;
    height: 100vh;
    overflow-y: hidden;
    z-index: 99;
    left: 10%;
    top: 10%;
    transition: .4s all;
    @media (max-width: 768px)
    {
        position: absolute;
        z-index : 93332499; 
        left: -95%; 
    }
  }
  #dis
  {
    left: 0%;
    z-index : 99;
    overflow : hidden;
    top: 10%;
  }
  #hide
  {
    left: -275%;
    z-index : 99;
  }
`;
export default GlobalStyle;