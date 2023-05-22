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

  body {
    background: #202025;
  }

  .App {

  }
  
  #root {
    margin: 0 auto;
    height: 100vh;
    max-width: 100vw;
    background: #202025;
  }

  body, input, button {
    color: #fff;
  }
`