import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'
import { type JSX } from 'react'

export default function Document (): JSX.Element {
  return (
      <Html lang="en">
          <Head>
              <link rel="preconnect" href="https://fonts.googleapis.com"/>
              <link rel="preconnect" href="https://fonts.gstatic.com" />
              <link
                  href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600&family=Radio+Canada:wght@400;500;600&family=Roboto+Slab:wght@200;300;400;600&display=swap"
                  rel="stylesheet"
              />
          </Head>
          <body>
              <Main />
              <NextScript />
          </body>
      </Html>
  )
}
