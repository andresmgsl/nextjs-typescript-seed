import Document, { Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  render() {
    return (
      <html>
        <Head>
          <link href="/static/css/style.css"></link>
        </Head>
        <style>{`
          body { 
            color: white;
          }
          .preload-image-hidden,
          .title-box {
            display: none;
          }
        `}</style>
        <body>
          <Main />
          <NextScript />

          <script type="text/javascript" src="/static/third-party/TweenMax.js"></script>
        </body>
      </html>
    )
  }
}

export default MyDocument