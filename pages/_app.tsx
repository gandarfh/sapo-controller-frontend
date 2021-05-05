import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { RecoilRoot } from 'recoil'
import theme from '@styles/theme'
import GlobalStyles from '@styles/GlobalStyles'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProvider>
    </RecoilRoot>
  )
}

export default MyApp
