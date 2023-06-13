import { createGlobalStyle } from "styled-components";

export const colors = {
  background: "#EE4266",
  button: "#1116",
  primary: "#1118",
  buttonHover: "#fff4",
  red: "#b00000",
  black: "#202022",
  white: "#cccccc"
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
  
  #root {
    margin: 0 auto;
    height: 100vh;
    max-width: 100vw;
    background: #202025;
  }

  .App {
    position: relative;
  }

  body, input, button {
    color: #fff;
  }

  .warning {
    text-align: center;
    padding: 0 10px 20px;
    line-height: 20px;

    @media (max-width: 600px) {
      text-align: justify;
    }
  }
`