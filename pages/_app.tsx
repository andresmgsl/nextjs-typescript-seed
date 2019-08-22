import App from 'next/app'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { Transition, TransitionGroup } from 'react-transition-group';

import { themeConfig } from '@config/theme/theme.config';
import { MainContainer} from '@utils/styled-components/index';

declare var TweenMax: any;

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
  
`



class MyApp extends App {

  enterTransition(node: any) {
    TweenMax.fromTo(node, 0, { x: 0, opacity: 0 }, {x: 200, opacity: 1});
  }

  render () {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <TransitionGroup>
          <Transition 
            timeout={{
                    enter: 0, // TODO: refact and understeen
                    exit: 0
                  }}
                >
            <MainContainer className="main-container">
              <GlobalStyles />

              <Component {...pageProps} />

            </MainContainer>
          </Transition>
        </TransitionGroup>
      </ThemeProvider>
    )
  }
}


export default MyApp