import App from 'next/app'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

import { themeConfig } from '@config/theme/theme.config';
import { MainContainer } from '@utils/styled-components/index';

const theme = themeConfig
const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "FreightBigPro";
    src: url("/static/fonts/FreightBigPro-Medium.woff");
  }

  @font-face {
    font-family: "Montserrat";
    src: url("/static/fonts/Montserrat-Regular.woff");
  }

  html, body {
    height: 100%; 
    margin:0;
    font-family: "FreightBigPro";
  }
  
  * {
    box-sizing: border-box;
  }

  .box-container-2,
  .box-container {
    display: block;
    position: relative;
    height: 50px;
    width: 220px;
    margin: 0 auto;
  }

  .box-container {
    height: 50px;
  }
  .box-container-2 {
    height: 25px;
  }
  
  #demo {
    position: relative;
    width: 230px;
    height: 50px;
  }
  
  #action {
    padding: 10px;
    font-size: 0.875em;
    margin: 10px;
    cursor: pointer;
  }
`

class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <MainContainer>
          <GlobalStyles />
          <Component {...pageProps} />
        </MainContainer>
      </ThemeProvider>
    )
  }
}


export default MyApp