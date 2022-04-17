import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: white;
  font-family: 'Barlow Semi Condensed', sans-serif;
  line-height: 1.7;
  font-size: 13px;
}
`

export { GlobalStyle }
