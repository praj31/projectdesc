import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta charSet='UTF-8'></meta>

        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <meta property='og:type' content='website' />
        <meta property='og:image' content='/android-chrome-512x512.png' />
        <meta property='og:image:width' content='1024' />
        <meta property='og:image:height' content='1024' />
        <meta property='og:site_name' content='ProjectDesc' />
        <meta property='og:url' content='https://projectdesc.vercel.app' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
