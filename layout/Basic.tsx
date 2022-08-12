import { PropsWithChildren } from 'react'

import Head from 'next/head'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  html, body {
    height: 100%;
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  #root, #__next {
    isolation: isolate;
  }
`

export type Props = PropsWithChildren<{
  title?: string
}>

const TITLE_NAME = 'Wargaming Frontend Developer vacancy test'

const BasicLayout = ({ children, title }: Props) => {
  return (
    <>
      <Head>
        <title>{title ? `${title} - ${TITLE_NAME}` : TITLE_NAME}</title>
        <meta name="description" content={TITLE_NAME} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      {children}
    </>
  )
}

export default BasicLayout
