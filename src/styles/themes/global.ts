import { createGlobalStyle } from 'styled-components'
// import cover from '../../assets/cover.png'

export const GlobalStyle = createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }

 :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.primary}
  }

  body {
    background-color: ${(props) => props.theme['bluish-800']};
    color: ${(props) => props.theme['bluish-200']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem Nunito, sans-serif;
    line-height: 1.6;
  }

`
