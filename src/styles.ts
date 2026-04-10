import { createGlobalStyle } from 'styled-components'

export const colors = {
  orange: '#E66767',
  white: '#FFEBD9',
  green: '#00ff08',
  red: '#ff1100',
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    color: ${colors.orange}
  }

  body {
    background-color: #FFF8F2;
    font-family: Roboto, sans-serif;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
  }
`
