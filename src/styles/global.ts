import { createGlobalStyle } from "styled-components";

export const colors = {
  background: "#EE4266",
  button: "#1116",
  primary: "#1118",
  buttonHover: "#fff4"
}

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }

  #root {
    margin:0 auto;
    height: 100%;
    background: #202025;
  }

  body {
    height: 100vh;
  }

  body, input, button {
    color: #fff;
  }
`