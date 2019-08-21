import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {

  render() {
    return (
      <html>
        <Head>
          
        </Head>
        <body >
          <Main />
          <NextScript />

          <script type="text/javascript" src="/static/third-party/TweenMax.js"></script>
        </body>
      </html>
    )
  }
}