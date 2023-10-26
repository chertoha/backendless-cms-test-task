import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*, *::before, *::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  max-width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  font-size: 16px;
  font-weight: 400;
  color: #000000;

  background-color: #ffffff;
}



ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
li {
  margin: 0;
  padding: 0;
}

input {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  transition: color 250ms ease-in;
}



button {
  cursor: pointer;
  background-color: transparent;
  border: none;   
  transition: background-color 250ms ease-in;
}
`;
