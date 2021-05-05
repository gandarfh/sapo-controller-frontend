import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    * {
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: 'Montserrat', sans-serif;
      font-size: ${theme.font.sizes.mobile.text.medium};
      color: ${theme.colors.black};

      ${theme.breakpointFunc('md')} {
        font-size: ${theme.font.sizes.desktop.text.medium};
      }
    }
    html {
      font-size: 6.25%;
    }
    body {
      background-color: ${theme.colors.gray[100]};
      font-family: 'Montserrat', sans-serif;
    }
  `}
`

export default GlobalStyles
